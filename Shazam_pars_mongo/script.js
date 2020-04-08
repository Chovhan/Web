const webdriver = require('selenium-webdriver');
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });


async function scrap() {
    let  driver = await new webdriver.Builder().forBrowser('chrome').build();
    await driver.get("https://www.shazam.com/charts/top-50/world");
    await driver.wait(webdriver.until.elementsLocated(webdriver.By.className('ellip')));
    await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('[data-shz-audio-url]')));
    await driver.sleep(1000);

    let objList = [];

    let linkAddresses = await driver.findElements(webdriver.By.css("[data-screenname]"));
    let titles = await driver.findElements(webdriver.By.xpath("//div[@class='details details grid grid-vertical grid-space-between']/div[@class='title']/meta"));
    let artists = await driver.findElements(webdriver.By.xpath("//div[@class='details details grid grid-vertical grid-space-between']/div[@class='artist']/meta"));
    for (let i = 0; i < 49; i++) {
        console.log("Artist: " + await artists[i].getAttribute("content") + "\nTitle: " + await titles[i].getAttribute("content") + "\nLink: " + await linkAddresses[i].getAttribute("data-shz-audio-url") + "\n");
        let track = {artist: await artists[i].getAttribute("content"), title: await titles[i].getAttribute("content"), link: await linkAddresses[i].getAttribute("data-shz-audio-url")};
        objList.push(track)
    }
    await mongoClient.connect(function (err, client) {
        const db = client.db("shazamScrap");
        const collection = db.collection("tracks");
        collection.insertMany(objList, function (err, result) {
            if (err) {
                return console.log(err);
            }
            console.log(result.ops);
        })
    });
}

scrap();