const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer");

async function startBrowser() {
  let browser;
  try {
    console.log("Opening the browser......");
    browser = await chromium.puppeteer.launch({
      headless: true,
      defaultViewport: null,
      args: ["--incognito", "--no-sandbox", "--single-process", "--no-zygote"],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log("Could not create a browser instance => : " + err.message, err);
  }
  return browser;
}

module.exports = {
  startBrowser,
};
