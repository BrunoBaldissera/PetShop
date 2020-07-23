var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes/routes");
let bodyParser = require('body-parser');

var app = express();

// Configura o body-parser para lidar rquisições de post
app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

const db_conn = "mongodb+srv://bbaldissera:1234@cluster0.tcafq.gcp.mongodb.net/test";
mongoose.connect(db_conn, {
    useNewUrlParser: true,
});
var db = mongoose.connection;

var port = process.env.PORT || 8080;

 app.get('/', function (req, res) {
   res.json('Hello World!!!');
 });
//routes(app);

app.use('/api', routes);

app.listen(port, function () {
    console.log("Example app listening on port "+port+"!");
});