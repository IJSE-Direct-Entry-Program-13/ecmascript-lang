console.log("Starting of the second.js");

let x = 15;
const y = 25;

class MyClass2 {
    static {
        console.log("My Class 2");
    }
}

console.log("Ending of the second.js");

export {x, y, MyClass2};