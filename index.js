var express = require("express");
var app = express();
const path = require('path');
var mongoose = require("mongoose");
const cors = require('cors');
const session = require('express-session');
let bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

var Admin = require("./models/adminModel/admin");
var Client = require("./models/clientModel/client");

// Configura o body-parser para lidar rquisições de post
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

if(!isProduction) {
  app.use(errorHandler());
}

const db_conn = "mongodb+srv://bbaldissera:1234@cluster0.tcafq.gcp.mongodb.net/PetShop2020";
mongoose.connect(db_conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);
var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

require('./models/clientModel/client');
require('./config/passport');

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

var routes = require("./routes/routes");
app.use('/api', routes);
app.use('/api/routes', routes)

//Error handlers & middlewares
if(!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

app.listen(port, function () {
    console.log("Example app listening on port "+port+"!");
});
