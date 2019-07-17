/////////////
// SETTING UP YOUR SERVER & PATHS
////////////
const express = require('express')
const bodyParser = require("body-parser")
// THIS LISTENS TO OUR EXPRESS APP
const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.static("app"));
// THIS IS THE TEMPLATE WERE GIVEN IN ORDER TO COMMUNICATE WITH EXPRESS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CODE BELOW HAS THE SERVER POINT TO OUR ROUTE FILES
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// CHECK THAT THE SERVER IS LISTENING
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});