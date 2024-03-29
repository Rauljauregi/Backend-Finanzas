const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer');

async function startBrowser(){
    let browser;
    try {
        console.log("Opening the browser......");
        browser = await chromium.puppeteer.launch({
            headless: true,
            args: ['--no-sandbox'] ,
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}

module.exports = {
    startBrowser
};