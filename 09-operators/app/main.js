console.log(3 >> 1);
console.log(-3 >> 1, -3 >>> 1);
console.log(3 << 2);

console.log(3.88 >> 1.25);
console.log(3.88 << 2.999);

console.log("--------------");
console.log(5 > 2, 5 >= 5);
console.log(4 < 10, 4 <= 5);

let myObj = {};
console.log(myObj instanceof Object);

console.log(10 instanceof Number);
// console.log(10 instanceof number);
console.log("ijse" instanceof String);
// console.log("ijse" instanceof string);

console.log(new Number(10) instanceof Number);
console.log(new String("ijse") instanceof String);

console.log("------------------");
console.log(10, new Number(10));
console.log(10 == new Number(10));
console.log(typeof 10 == typeof new Number(10));

console.log("ijse", new String("ijse"));
console.log("ijse" == new String("ijse"));
console.log(typeof "ijse" == typeof new String("ijse"));

console.log(true, new Boolean(true));
console.log(true == new Boolean(true));
console.log(typeof true == typeof new Boolean(true));

console.log("------------------");
console.log(10, Number(10), new Number(10));
console.log("ijse", String("ijse"), new String("ijse"));
console.log(true, Boolean(true), new Boolean(true));

console.log("------------------");
console.log(Boolean([]));
console.log(Boolean([10,20]));
console.log(Number([10,20]));
console.log(Number(null));
console.log(Number({}));
console.log(Boolean(undefined));

let ref = new Number(10);
let value1 = new Number(10).valueOf();
let value2 = Number(10);

let ref1 = new Number(10);
let ref2 = new String("ijse");
let ref3 = new Boolean([]);
let ref4 = new Object();
let ref5 = new Array();
let ref6 = new RegExp();

console.log("------------------");
console.log(ref1 instanceof Number, ref1 instanceof Object);
console.log(ref2 instanceof String, ref2 instanceof Object);
console.log(ref3 instanceof Boolean, ref3 instanceof Object);
console.log(ref4 instanceof Object);
console.log(ref5 instanceof Array, ref5 instanceof Object);
console.log(ref6 instanceof RegExp, ref6 instanceof Object);
console.log("------------------");
console.log(Number instanceof Function);
console.log(String instanceof Function);
console.log(Boolean instanceof Function);
console.log(Object instanceof Function);
console.log(Array instanceof Function);
console.log(RegExp instanceof Function);

class Customer{}

console.log(Customer instanceof Function);
console.log(Customer instanceof Object);

console.log("------------------");

let customer = {};
customer.id = 'C001';
customer.name = 'Kasun';

console.log('id' in customer);
console.log('name' in customer);

// delete customer.name;
console.log('name' in customer);

customer.print = function(){
  console.log("Hello I am a function")
};
console.log('print' in customer);

console.log(customer.id);
console.log(customer.name);
console.log(customer.print);

// customer.id();
//customer.name();
customer.print();

let something = customer.print;
something();

console.log("--------------------");

console.log(10 == "10");    // (value)
console.log(typeof 10 == typeof "10");
console.log(10 === "10");   // (value+type)

console.log("--------------------");

console.log(null == undefined);
console.log(null === undefined);

console.log("--------------------");

console.log(true == "true");
console.log(true == []);
console.log(true == [1]);
console.log(true == [10, 20]);
console.log({} == {});
console.log({} == "[object Object]");
console.log({} == []);
console.log([10,20] == "10,20");

console.log("--------------------");

console.log(undefined == "abc");
console.log(undefined == 0);
console.log(null == 0);
console.log(null == "abc");




