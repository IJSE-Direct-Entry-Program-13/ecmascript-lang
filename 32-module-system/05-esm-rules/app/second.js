let x = 10;
x += 5;
console.log("Second.js module is being executed");

export class Customer{
    constructor() {
        console.log("Customer " + x);
    }
}

