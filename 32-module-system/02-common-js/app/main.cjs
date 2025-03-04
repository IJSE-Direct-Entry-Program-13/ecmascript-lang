console.log("Hello App!");

const {x, y, MyClass} = require('./first.cjs');

console.log(x, y, new MyClass());

console.log("======================");

const {x: x2, y: y2, MyClass2} = require('./second.cjs');

console.log(x2, y2, new MyClass2());