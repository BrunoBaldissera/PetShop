var express = require("express");
var app = express();
const path = require('path');
var mongoose = require("mongoose");
let bodyParser = require('body-parser');

var Admin = require("./models/adminModel/admin");
var Client = require("./models/clientModel/client");

// Configura o body-parser para lidar rquisições de post
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

const db_conn = "mongodb+srv://bbaldissera:1234@cluster0.tcafq.gcp.mongodb.net/PetShop2020";
mongoose.connect(db_conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname + '/public')));

import { Bearer } from 'permit'

const permit = new Bearer({
  basic: 'username', // Also allow a Basic Auth username as a token.
  query: 'access_token', // Also allow an `?access_token=` query parameter.
})

function authenticate(req, res, next) {
  // Try to find the bearer token in the request.
  const token = permit.check(req)

  // No token found, so ask for authentication.
  if (!token) {
    permit.fail(res)
    return next(new Error(`Authentication required!`))
  }

  // Perform your authentication logic however you'd like...
  db.clients.findByToken(token, (err, client) => {
    if (err) return next(err)

    // No user found, so their token was invalid.
    if (!client) {
      permit.fail(res)
      return next(new Error(`Authentication invalid!`))
    }

    // Authentication succeeded, save the context and proceed...
    req.client = client
    next()
  })
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

var routes = require("./routes/routes");
app.use('/api', routes);

app.listen(port, function () {
    console.log("Example app listening on port "+port+"!");
});
