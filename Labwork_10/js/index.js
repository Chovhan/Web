// 1. створити строку
// 2. написати функцію яка буде рахувати скільки заданих літер у строці

function main() {
    var word = "Hello world";
    var searchChar = "o";
    console.log(count(word.toLocaleLowerCase(), searchChar.toLowerCase()));
    console.log(countWithIndexOf(word.toLowerCase(), searchChar.toLowerCase()));
}

function countWithIndexOf(word, searchChar) {
    var c = 0;
    for (let i = 0; i <word.length; i++) {
        if (word.indexOf(searchChar)){
            c++
        }
    }
    return c;
}

function count(word, searchChar) {
    var c = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === searchChar) {
            c++
        }
    }
    return c;
}

main();