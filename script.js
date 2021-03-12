require("chromedriver");

const wd = require("selenium-webdriver");
// nodeconst chrome = require("selenium-webdriver/chrome");
const browser = new wd.Builder().forBrowser('chrome').build();

async function main () {
    await browser.get("https://www.cricbuzz.com/");
    await browser.wait(wd.until.elementLocated(wd.By.css(".cb-hm-mnu-itm")));
    let buttons = await browser.findElements(wd.By.css(".cb-hm-mnu-itm"));
    await buttons[1].click();
    
 }

 main();