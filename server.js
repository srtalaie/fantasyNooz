require("dotenv").config();

const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const request = require("request");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/getADP', function(req, res){
  request('https://www.4for4.com/fantasy-football/adp', function(error, response, html){
    let $ = cheerio.load(html);

    table = $('table').html();
    console.log(table);
  });
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
  