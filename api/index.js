const app = require('express')();
const { v4 } = require('uuid');

 // api
 var fs = require('fs');
 const dataPath = './data.json';

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;



// Making Express listen on port 7000
app.listen(7000, function() {
    console.log('Running on port 7000.');
  });