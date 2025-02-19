function Customer(id, name){
    this.id = id;
    this.name = name;
    // this.print = function(){
    //     console.log(this.id, this.name);
    // }
}

Customer.prototype.print = function(){
    console.log(this.id, this.name);
}

let c1 = new Customer('C001', 'Kasun');
let c2 = new Customer('C002', 'Nuwan');
let c3 = new Customer('C003', 'Ruwan');

// c1.__proto__ = null;
// c2.__proto__ = null;
// c3.__proto__ = null;

console.log(c1, c1 instanceof Customer);
console.log(c2, c2 instanceof Customer);
console.log(c3, c3 instanceof Customer);

console.log("====================");

console.log("prototype" in Customer);
console.log(Customer.prototype);
console.log("constructor" in Customer.prototype);
console.log(Customer.prototype.constructor);
console.log(c1.__proto__.constructor === Customer);

console.log("====================");

console.log(c1.id);
c1.print();

console.log("====================");

function Employee(id, name, contact){
    this._id = id;
    this._name = name;
    this._contact = contact;
}

Employee.prototype.getId = function(){
    return "E" + this._id;
}

Employee.prototype.getDetails = function(){
    return this._name + "," + this._contact;
}

let e1 = new Employee(1, 'Kasun',
    '011-1234567');
let e2 = new Employee(2, 'Nuwan',
    '071-1234567');

console.log(e1.getDetails());
console.log(e2.getDetails());

console.log("=====================");

console.log(Employee.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(e1.__proto__.__proto__.constructor.__proto__ === Function.prototype);
console.log(e2.__proto__.constructor.__proto__.__proto__.constructor === Object);

console.log("=====================");

function Car(number, color){
    console.log("Super: Car")
    this.number = number;
    this.color = color;
}

Car.prototype.print = function(){
    console.log(this.number, this.color);
}

function Prius(number, color, abs, hybrid){
    // super
    Car.call(this, number, color);
    console.log("Sub: Prius");
    this.abs = abs;
    this.hybrid = hybrid;
}

Prius.prototype.__proto__ = Car.prototype;

const myPrius = new Prius(1, 'red', true, true);
console.log("Instance of Prius?", myPrius instanceof Prius);
console.log("Instance of Car?", myPrius instanceof Car);
console.log("Instance of Object?", myPrius instanceof Object);
myPrius.print();









