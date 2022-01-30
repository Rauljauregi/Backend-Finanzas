const browserObject = require('./browser');
const scraperController = require('./pageController');

const express = require('express'); // Adding Express
const app = express(); // Initializing Express

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance)

    // Api
    var fs = require('fs');
    const dataPath = './data.json';
    const dataPath1 = './data1.json';

    // READ
    app.get('/api', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.send(JSON.parse(data));
      });
    });
        // ROOT TESTING
        app.get('/', (req, res) => {
          fs.readFile(dataPath1, 'utf8', (err, data) => {
            if (err) {
              throw err;
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.send(JSON.parse(data));
          });
        });
var port = process.env.PORT || 8080;
// Making Express listen on port 7000
app.listen(port, function() {
  console.log('Running.');
});