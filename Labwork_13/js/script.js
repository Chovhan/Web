function main() {
    let city1 = {};
    city1.name = "CityN";
    city1.population = 10_000_000;

    let city2 = {
        name: "CityM",
        population: 10**6
    };
    console.log(getName(city2));
    console.log(getName(city1));
    console.log(exportStr(city1));
    console.log(exportStr(city2))
}

function getName(object) {
    return object.name;
}

function exportStr(object) {
    return `name =  ${object.name}\npopulation = ${object.population}\n`;
}

main();