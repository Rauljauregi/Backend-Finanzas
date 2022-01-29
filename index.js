const browserObject = require('./browser');
const scraperController = require('./pageController');

const express = require('express'); // Adding Express
const app = express(); // Initializing Express

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();
    // api
    var fs = require('fs');
    const dataPath = './data.json';

    // READ
    app.get('/api', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });

// Pass the browser instance to the scraper controller
scraperController(browserInstance)



// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});