function main() {
    var varHello = "Hello";
    var varSpace = " ";
    var varWorld = "World";
    console.log("Function expression: " + functionExpression(varHello, varSpace));
    console.log("Function declaration: " + functionDeclaration(varHello, varSpace, varWorld));
    console.log("Function declaration: " + functionDeclaration(varHello, varSpace));
}

function functionDeclaration(varHello, varSpace, varWorld) {
    // if (typeof varWorld == "undefined"){
    //     return "var 'varWorld' is undefined";
    // } else {
    //     return varHello + varSpace + arguments[2];
    // }
    return (arguments.length !== 3) ? "var 'varWorld' is undefined" : varHello + varSpace + arguments[2];
}

let functionExpression = (varHello, varSpace, varExpression= "Expression") => varHello + varSpace + varExpression;

main();
