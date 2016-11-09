var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var uuid = require("uuid");

app.listen(8000, function() {
    console.log("Server is listening on port 8000");
});

var bounties = [
    {
        firstName: "Rey",
        lastName: null,
        living: true,
        amount: 1000000,
        type: "Jedi",
        id: "1"
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        amount: 10000000,
        type: "Jedi",
        id: "2"
    }
];

app.get("/bounties", function(req, res) {
    res.send(bounties);
});

app.get("/bounties/:bountyId", function(req, res) {
   for (var i = 0; i < bounties.length; i++) {
       if(bounties[i].id === req.params.bountyId) {
           res.send(bounties[i]);
       }
   }
});

app.post("/bounties", function(req, res) {
    var bounty = req.body;
    bounty.id = uuid.v4();
    bounties.push(bounty);
    console.log("Successfully created new bounty");
    return res.send(bounties);
});

app.put("/bounties/:bountyId", function(req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if(bounties[i].id === req.params.bountyId) {
            bounties[i] = req.body;
            console.log("Successfully updated bounty");
            return res.send(bounties);
           }
    }
    res.send("Didn't find bounty with that Id");
});

app.delete("/bounties/:bountyId", function(req, res) {
    bounties.splice(req.params.bountyId, 1);
    console.log("Succesfully deleted bounty");
    return res.send(bounties);
});