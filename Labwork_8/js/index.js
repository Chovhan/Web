main();

function main() {
    let numberArray = [];
    for (let i = 0; i < 10; i++) {
        addNumberToArray(numberArray);
        logArray(numberArray[i]);
    }
}

function addNumberToArray(numberArray) {
    numberArray.push(getRandomNumber());
}

function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

function logArray(arrayVar) {
    console.log(arrayVar + " belong 'numberArray'!");
}
