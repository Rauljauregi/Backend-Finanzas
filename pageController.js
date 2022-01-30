const pageScraper = require('./pageScraper');
const fs = require('fs');
let datos = ["LITE", "VIAV","NA9.DE","GDI.TO","MTY.TO","GSY.TO","PBH","BERY","SUS.L","IL8.F","AMZN","P1E0.F","GOOG","MRL.L","6NF.F","CNSWF","CTS.TO","DOLE","ZTS","IDXX","MCD","HLT","CMG","LOW"]
// let datos = ["Mystery", "Travel","Fiction"]
async function scrapeAll(browserInstance){
    let browser;
    try{

        let scrapedData = {};

        for(i=0 ; i< datos.length; i++){
            console.log(i,": ",datos[i])
            browser = await browserInstance;
            // Call the scraper for different set of books to be scraped
            scrapedData[datos[i]] = await pageScraper.scraper(browser, datos[i], i);
            // await browser.close();


            fs.writeFile("data.json", JSON.stringify(scrapedData), 'utf8', function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log(i, " ","The data has been scraped and saved successfully! View it at './data.json'");
            });
    }
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)