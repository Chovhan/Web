function main() {
    var word = "Hello world";
    var searchChar = "l";
    console.log(count(word.toLocaleLowerCase(), searchChar.toLowerCase()));
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