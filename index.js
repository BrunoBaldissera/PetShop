var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes/routes");

var app = express();

mongoose.connect("mongodb://localhost:39725/pet-shop/", {
    useNewUrlParser: true,
});

// app.get('/', function (requisition, response) {
//   res.json('Hello World!');
// });
routes(app);

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});