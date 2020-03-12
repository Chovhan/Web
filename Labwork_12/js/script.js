main();

function main() {
    let manufacturerProduct = new Map();
    manufacturerProduct
        .set('manufacturerOne', 'Product One')
        .set('manufacturerTwo', 'Product Two')
        .set('manufacturerThree', 'Product Three')
        .set('manufacturerFour', 'Product Four')
        .set('manufacturerFive', 'Product Five');

    let priceManufacturer = new Map();
    priceManufacturer
        .set(100, 'manufacturerOne')
        .set(110, 'manufacturerTwo')
        .set(120, 'manufacturerThree')
        .set(130, 'manufacturerFour')
        .set(140, 'manufacturerFive');

    let deliveryManufacturer = new Map();
    deliveryManufacturer
        .set(20210, 'manufacturerOne')
        .set(1110, 'manufacturerTwo')
        .set(3210, 'manufacturerThree')
        .set(3240, 'manufacturerFour')
        .set(3450, 'manufacturerFive');

    getMinPriceObject(priceManufacturer, manufacturerProduct, deliveryManufacturer);
    getMaxPriceObject(priceManufacturer, manufacturerProduct, deliveryManufacturer);
    getMinTimeObject(priceManufacturer, manufacturerProduct, deliveryManufacturer);
    getMaxTimeObject(priceManufacturer, manufacturerProduct, deliveryManufacturer);
}

function getMinPriceObject(priceManufacturer, manufacturerProduct, deliveryManufacturer) {
    let minPrice = Math.min(...Array.from(priceManufacturer.keys()));
    let manufacturerName = priceManufacturer.get(minPrice);
    let productName = manufacturerProduct.get(manufacturerName);
    let minPriceObject = {};
    minPriceObject[productName] = minPrice + ' ' + manufacturerName + ' ' + getKeyByValue(deliveryManufacturer, manufacturerName);
    console.log(minPriceObject);
}

function getMaxPriceObject(priceManufacturer, manufacturerProduct, deliveryManufacturer) {
    let maxPrice = Math.max(...Array.from(priceManufacturer.keys()));
    let manufacturerName = priceManufacturer.get(maxPrice);
    let productName = manufacturerProduct.get(manufacturerName);
    let maxPriceObject = {};
    maxPriceObject[productName] = maxPrice + ' ' + manufacturerName + ' ' + getKeyByValue(deliveryManufacturer, manufacturerName);
    console.log(maxPriceObject);
}

function getMinTimeObject(priceManufacturer, manufacturerProduct, deliveryManufacturer) {
    let minTime = Math.min(...Array.from(deliveryManufacturer.keys()));
    let manufacturerName = deliveryManufacturer.get(minTime);
    let productName = manufacturerProduct.get(manufacturerName);
    let minTimeObject = {};
    minTimeObject[productName] = getKeyByValue(priceManufacturer, manufacturerName) + ' ' + manufacturerName + ' ' + minTime;
    console.log(minTimeObject);
}

function getMaxTimeObject(priceManufacturer, manufacturerProduct, deliveryManufacturer) {
    let maxTime = Math.max(...Array.from(deliveryManufacturer.keys()));
    let manufacturerName = deliveryManufacturer.get(maxTime);
    let productName = manufacturerProduct.get(manufacturerName);
    let maxTimeObject = {};
    maxTimeObject[productName] =  getKeyByValue(priceManufacturer, manufacturerName) + ' ' + manufacturerName + ' ' + maxTime;
    console.log(maxTimeObject);
}


function getKeyByValue(map, value) {
    for (let key of map.keys()){
        if (map.get(key) === value) {
            return key;
        }
    }
}