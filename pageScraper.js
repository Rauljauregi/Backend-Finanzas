const fs = require('fs');
let scrapedData = [];
let data

const scraperObject = {
    url: 'https://finance.yahoo.com/quote/',
    async scraper(browser, category, i){
        let page = await browser.newPage();
        let url2 = 'https://finance.yahoo.com/quote/';
        let tiker = category;
        let accept
        
        // Navigate to the selected page
        let selectedCategory = url2+tiker;
        console.log(`Navigating to ${selectedCategory}...`);
        await page.goto(selectedCategory);
        // Cookies
       
        if (i==0) {
            accept ='#consent-page button';
        }else accept ="#quote-header-info fin-streamer"
        console.log(i," ",accept)
        await page.click(accept);
        await page.waitForSelector('#quote-header-info fin-streamer')
        console.log(selectedCategory)

        await page.goto(selectedCategory);
       
        // Wait for the required DOM to be rendered
        async function scrapeCurrentPage(){
                var element = await page.waitForXPath(`//*[@id="quote-header-info"]/div[3]/div[1]/div[1]/fin-streamer[1]`);
                var price = await page.evaluate(element => element.textContent, element);
                console.log(scrapedData," - ",price);  
                // scrapedData.push(price);   
                scrapedData = price;      
               
            return scrapedData;
        }
        data = await scrapeCurrentPage();
        console.log(data," ",i);
        return data;
    }
}

module.exports = scraperObject;