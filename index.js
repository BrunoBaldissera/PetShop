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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

var routes = require("./routes/routes");
app.use('/api', routes);

app.listen(port, function () {
    console.log("Example app listening on port "+port+"!");
});