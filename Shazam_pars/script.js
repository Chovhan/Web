const webdriver = require('selenium-webdriver');

async function scrap() {
    let  driver = await new webdriver.Builder().forBrowser('chrome').build();
    await driver.get("https://www.shazam.com/charts/top-50/world");
    await driver.wait(webdriver.until.elementsLocated(webdriver.By.className('ellip')));
    await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('[data-shz-audio-url]')));
    await driver.sleep(1000);

    let linkAddresses = await driver.findElements(webdriver.By.css("[data-screenname]"));
    let titles = await driver.findElements(webdriver.By.xpath("//div[@class='details details grid grid-vertical grid-space-between']/div[@class='title']/meta"));
    let artists = await driver.findElements(webdriver.By.xpath("//div[@class='details details grid grid-vertical grid-space-between']/div[@class='artist']/meta"));
    for (let i = 0; i < 49; i++) {
        console.log("Artist: " + await artists[i].getAttribute("content") + "\nTitle: " + await titles[i].getAttribute("content") + "\nLink: " + await linkAddresses[i].getAttribute("data-shz-audio-url") + "\n")
    }
}

scrap();