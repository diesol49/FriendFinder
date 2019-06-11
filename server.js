/////////////
// SETTING UP YOUR SERVER & PATHS
////////////
const express = require('express')
const bodyParser = require("body-parser")
const path = require("path")
// THIS LISTENS TO OUR EXPRESS APP
const app = express()
const PORT = process.env.PORT || 8000;

// WE NEED TO HAVE OUR ROUTING FILES LINKED
const apiRoutes = require("./app/routing/apitRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");
// THIS IS THE TEMPLATE WERE GIVEN IN ORDER TO COMMUNICATE WITH EXPRESS
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});