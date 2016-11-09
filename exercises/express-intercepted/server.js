var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var makeObject = require("./middleware");
app.use("/", makeObject);

app.listen(8000, function() {
    console.log("Server is listening on port 8000!!!");
});

app.get("/", function(req, res) {
    console.log(req.object);
    res.send("You have reached the middle!");
});