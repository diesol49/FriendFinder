const friends = require("../data/friends.js");

module.exports = function(app) {
 app.get("/api/friends", function(req, res) {
     res.json(friends);
 });
 // Need to handle survey data from users
 app.post("/api/friends", function(req, res) {
    var match = {
        name: "",
        photo: "",
        difference: 1000
    };
    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;
// We loop through the users data to get their answers and run a loop for our math algorithm
    var totalDifference = 0;
    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;
// Above we looped through our heroe's list, now below we will loop through their scores
// along with using Math absolute, which turns a negative into a positive.
        for (var k = 0; k < friends[i].scores[k]; k++) {
            totalDifference += Math.abs(parseInt(userScores[k]) - parseInt(friends[i].scores[k]));
// the lowest score from our difference will be matched with their hero
            if (totalDifference <= match.difference) {
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                match.difference = totalDifference;
            }
        }
    }

    friends.push(userData);

    res.json(match);

});
}