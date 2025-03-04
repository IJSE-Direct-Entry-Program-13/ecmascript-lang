console.log("Beginning of the first.js");

let x = 10;
let y = 20;

class MyClass {
    static {
        console.log("My Class")
    }
}

console.log("Ending of the first.js");

module.exports = {
    x,
    y,
    MyClass
}