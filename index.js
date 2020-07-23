var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes/routes");

app.use('/api', apiRoutes);

var app = express();

mongoose.connect("mongodb://localhost:39725/pet-shop/", {
    useNewUrlParser: true,
});

var port = process.env.PORT || 8080;

 app.get('/', function (req, res) {
   res.json('Hello World!');
 });
//routes(app);

app.listen(port, function () {
    console.log("Example app listening on port "+port+"!");
});