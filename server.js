require("dotenv").config();

const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const request = require("request");

const PORT = process.env.PORT || 3001;

const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//API routes
require('./routes/apiRoutes.js')(app);

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
  