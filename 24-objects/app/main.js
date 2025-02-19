// function Car(number, color){
//     this.number = number;
//     this.color = color;
// }
//
// Car.prototype.print = function(){
//     console.log("number: " , this.number, "color: ", this.color);
// }

class Car{
    number;
    color;
    constructor(number, color) {
        this.number = number;
        this.color = color;
    }
    print(){
        console.log("number:", this.number, "color:", this.color);
    }
}

console.log("Is car C.F.O?", Car instanceof Function);
console.log("print" in Car.prototype);
console.log(Car.prototype.constructor === Car);
console.log(Car.__proto__ === Function.prototype);

// function Prius(number, color, abs, hybrid){
//     Car.call(this, number, color);
//     this.abs = abs;
//     this.hybrid = hybrid;
// }
//
// Prius.prototype.__proto__ == Car.prototype;

class Prius extends Car{
    abs;
    hybrid;

    constructor(number, color, abs, hybrid) {
        super(number, color);
        this.abs = abs;
        this.hybrid = hybrid;
    }
}

console.log(Prius.prototype.constructor === Prius);
console.log(Prius.prototype.__proto__ === Car.prototype);;