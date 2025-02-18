function print() {
    console.log("print()", this === globalThis);
    console.log("print()", this === customer);
    console.log(this === employee);
}

let customer = {id: 'C001', name: 'Kasun'};
let employee = {};

// print();
//print.call(employee);
let x = print.bind(customer);

x();

console.log("--------------------");

let myMethod;
let a = 10;

function myCrazyMethod() {
    let b = 20;
    myMethod = function () {
        console.log(a + b);
    }
}

myCrazyMethod();
myMethod();

function inPureFun(a, b) {
    return parseInt(a * Math.random() + b);
}

console.log("5,2=", inPureFun(5, 2));
console.log("8,2=", inPureFun(8, 2));
console.log("5,2=", inPureFun(5, 2));

console.log("===============");

function add(a, b) {
    return a + b;
}

console.log("5,2=", add(5, 2));
console.log("8,2=", add(8, 2));
console.log("5,2=", add(5, 2));

console.log("===============");

let result = 5;

// This is not a side effect function
// But this is not also a pure function
function multiply(a, b) {
    return a * b * result;
}

console.log(multiply(2, 5));
result = 2;
console.log(multiply(2, 5));

console.log("===============");

function myFn() {
    let a = 10;
    let b = 20;
    let d = 25;
    console.log(a, b);
    {
        let a = 30;
        let b = 40;
        let c = 50;
        console.log(a, b, c,d);
    }
    console.log(a, b);
}

myFn();

















