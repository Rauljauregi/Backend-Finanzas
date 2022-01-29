const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer
let stockData = "1"
let price = " 2"
    // Wrapping the Puppeteer browser logic in a GET request
app.get('/', function(req, res) {
                // Sending the Digimon names to Postman
                res.send(stockData+" "+price);
            });
// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
  puppeteer.launch({headless: true}).then(async function(browser) {
    const page = await browser.newPage( );
    await page.goto('https://finance.yahoo.com/quote/NA9.F/financials');
    // aceptar cookies
    await page.click('#consent-page button');
    await page.waitForSelector('#quote-header-info fin-streamer')
    await page.evaluate(() => {
        document.querySelector('div#quote-header-info fin-streamer').click()
        price = document.querySelector('div#quote-header-info fin-streamer')
        
        stockData = price.innerHTML
    })
   
    stockData[0] = price
    await page.screenshot({ path: 'yahooFinance.jpg'});
    // const stock = page.evaluate(() =>{
    //     //     price = document.querySelector('div#quote-header-info fin-streamer').textContent
    //     // });
    //     if(document.querySelector('#quote-header-info fin-streamer').textContent){
    //         stockData[0] = document.querySelector('#quote-header-info fin-streamer').textContent
    //         console.log(stockData[0])
    //         alert(stockData[0])
    //         }else{
    //             console.log(stockData,"vacío")
    //         }
             
    //     page.screenshot({ path: 'yahooFinance0.jpg'});
    //     if(document.querySelector('div#Col1-1-Financials-Proxy div:nth-child(11) > div.D\28 tbr\29.fi-row.Bgc\28 \24 hoverBgColor\29 \3a h > div:nth-child(2)').textContent){
    //         stockData[1] = document.querySelector('div#Col1-1-Financials-Proxy div:nth-child(11) > div.D\28 tbr\29.fi-row.Bgc\28 \24 hoverBgColor\29 \3a h > div:nth-child(2)').textContent
    //         console.log(stockData[1])
    //         alert(stockData[1])
    //         }else{
    //             console.log(stockData,"vacío")
    //         }
         
    //     page.screenshot({ path: 'yahooFinance1.jpg'});
    //     if(document.querySelector('div#Col1-1-Financials-Proxy div:nth-child(22) > div.D\28 tbr\29.fi-row.Bgc\28 \24 hoverBgColor\29 \3a h > div:nth-child(2) > span').textContent){
    //         stockData[2] = document.querySelector('div#Col1-1-Financials-Proxy div:nth-child(22) > div.D\28 tbr\29.fi-row.Bgc\28 \24 hoverBgColor\29 \3a h > div:nth-child(2) > span').textContent
    //         console.log(stockData[2])
    //         alert(stockData[2])
    //         }else{
    //             console.log(stockData,"vacío")
    //         }
         
    // page.screenshot({ path: 'yahooFinance2.jpg'});
    // });

    

    // Closing the Puppeteer controlled headless browser
    // await browser.close();

    // // Adding simple GET request route as a test
    // app.get('/', function(req, res) {
    //     // Sending 'Test' back to Postman
    //     res.send('Test');
    // });
    

});
// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});