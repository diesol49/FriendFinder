const path = require("path");
const friends = require("../data/friends");

module.exports = function(app) {
 app.get("/api/friends", function(req, res) {
     res.json(friends);
 });
 // Need to handle survey data from users
 app.post("/api/friends", function(req, res) {
     friends.push(req.body);
 });
};