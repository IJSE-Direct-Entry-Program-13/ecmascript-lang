// function Customer(id, name){
//     this._id = id;
//     this._name = name;
// }
//
// Customer.prototype.getId = function(){
//     return this._id;
// }
//
// Customer.prototype.getName = function(){
//     return this._name;
// }

class Customer {
    _id;
    _name;

    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }
}

console.log("Writable: ", Object
    .getOwnPropertyDescriptor(Customer, "prototype").writable);

let c1 = new Customer('C001', 'Kasun');
Customer.prototype = {};
let c2 = new Customer("C002", "Nuwan");
// console.log(c2.getId());

console.log("is c1 instance of Customer? ", c1 instanceof Customer);
// console.log(c1.getId(), c1.getName());
console.log("_id" in c1, "_name" in c1);
console.log("getId" in Customer.prototype);
console.log("getName" in Customer.prototype);

console.log("=====================");

class Employee {
    // It is not mandatory to define fields
    // But defining them can be helpful in setting default values
    id = 'E001';
    name;
    contact;

    // Classes can have only one constructor
    // constructor() {
    // }

    constructor(name, contact) {
        this.name = name;
        this.contact = contact
    }
}

console.log("=====================");

function myFn(arguments) {
    console.log(arguments);
}

myFn(10, 20);

console.log("=====================");

class MyClass {
    print() {
        console.log("Let's print something");
    }
}

new MyClass().print();
new MyClass().print();
new MyClass().print();

console.log("=====================");

class Item {
    code;
    description;

    constructor(code, description) {
        this.code = code;
        this.description = description;
    }

    internalPrint() {
        // console.log(code, description);  <- This is going to raise an error
        console.log(this.code, this.description);
    }

    print() {
        // internalPrint();  <- This is going to raise an error
        this.internalPrint();
    }
}

new Item('I001', 'Mouse').print();

console.log("=========================");

class MyCrazyClass {
    method2() {
        function method() {
        }
    }

    // function method(){
    //
    // }
}

console.log("=========================");

class AwesomeClass {
    instanceField1 = 10;
    instanceField2 = 20;
    static staticField1 = 10;
    static staticField2 = 20;

    instanceMethod1() {
        console.log("Instance Method1")
    }

    instanceMethod2() {
        console.log("Instance Method2")
    }

    static staticMethod1() {
        console.log("Static Method1")
    }

    static staticMethod2() {
        console.log("Static Method2")
    }
}

let instanceRef = new AwesomeClass();
console.log(instanceRef.instanceField1, instanceRef.instanceField2);
instanceRef.instanceMethod1();
instanceRef.instanceMethod2();
//console.log(instanceRef.staticField1, instanceRef.staticField2);
console.log(AwesomeClass.staticField1, AwesomeClass.staticField2);
//console.log(instanceRef.__proto__.constructor.staticField1);
AwesomeClass.staticMethod1();
AwesomeClass.staticMethod2();

console.log("=========================");

class MyClass2 {
    a = 10;
    static a = 20;

    static method() {
        console.log("this?", this === MyClass2, this.a);
    }

    method() {
        console.log("this?", this, this.a);
    }
}

const instanceRef2 = new MyClass2();
instanceRef2.method();
MyClass2.method();

console.log("=========================");

class MyClass3 {
    static {
        console.log("Static Initializer 1");
    }

    // {}

    static {
        console.log("Static Initializer 2");
    }
}

console.log("=========================");

class ExecutionFlow {
    static {
        console.log("Static Initializer 1");
    }
    [instanceField(1)] = 10;
    instanceField2 = 20;
    [instanceField(3)] = 30;
    [staticField(1)] = 35;
    staticField2 = 40;
    [staticField(3)] = 45;
    static {
        console.log("Static Initializer 2");
    }
}

function instanceField(no) {
    console.log(`instanceField${no}`);
    return `instanceField${no}`;
}

function staticField(no) {
    console.log(`staticField${no}`);
    return `staticField${no}`;
}

console.log("=========================");

class Super {
    static {
        console.log("Super Static Initializer 1");
    }
    [(() => {
        console.log("Super: Field1");
        return 'field1'
    })()] = 10;
    static {
        console.log("Super Static Initializer 2");
    }
}

class Sub extends Super {
    static {
        console.log("Sub Static Initializer");
    }
    [(() => {
        console.log("Sub: Field1");
        return 'field1'
    })()] = 10;
}

// const a = b;
// const b = 20;

console.log("==================================");

class Parent {
    field1 = (() => {
        console.log("sup:field1");
        return 10;
    })();
    field2 = (() => {
        console.log("sup:field2");
        return 20;
    })();

    constructor() {
        console.log("Parent()");
    }
}

class Child extends Parent {
    field1 = (() => {
        console.log("sub:field1");
        return 30;
    })();
    field2 = (() => {
        console.log("sub:field2");
        return 40;
    })();

    constructor() {
        console.log("Child()");
        // console.log(this.field1, this.field2);
        super();
        console.log(this.field1, this.field2);
    }
}

new Child();

console.log("=======================");

class A {
    static {
        console.log("Static Initializer 1");
    }
    static staticField1 = (() => {
        console.log("Static Field");
        return 10;
    })();
    static {
        console.log("Static Initializer 2");
    }
    [(()=>{
        console.log("Instance Field");
        return 'instanceField1';
    })() + 1] = 10;
}

console.log("=======================");

class B {
    [(()=>{
        console.log("A");
        return 'field1';
    })()] = (()=>{
        console.log("B");return 10;
    })();
    static [(()=>{
        console.log("C");return 'field1';
    })()] = (()=>{ console.log("D"); return 25;})();
    constructor() {
        B.mymethod();
        console.log("constructor");
        console.log(this.field1);
    }
    static ['mymethod'](){
        console.log(this.field1);
    }
    static{console.log("E");}
}
new B();

console.log("=======================");

function get(value, comment){console.log(comment); return value;}
class C{
    static[get('a', 'A')] = get(10, 'B');
    static{        console.log("C");    }
    [get('b', 'D')] = get(20, 'E');
    constructor() {
        console.log("constructor: C"); console.log(this.b);
    }
}
class D extends C{
    [get('b', 'F')] = get(30, 'G');
    constructor() {        super();    }
    static [get('c', 'K')] = get(100, 'L')
}
class E extends C{
    [get('b', 'H')] = get(40, 'I');
    static{    console.log("J");    }
    constructor() {
        new D(); console.log("D: constructor");    super();
    }}
new E();
console.log("===========================");

// Class Literal
class Teacher{
}

new Teacher();

// Class Expression
const Student = class {
}

new Student();

// function Teacher(){
//
// }
//
// var Teacher = function(){
//
// }
console.log("===========================");

class Client{
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }
    #getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
}

let client1 = new Client(1, 'Kasun');
//console.log(client1.#id, client1.#name);
console.log(client1);
console.log(client1.getName());

// Behind the scene of ECMAScript private members
let symbolRef = Symbol();

let myObj = {
    [symbolRef]: 'C001',
    name: 'Kasun'
};
Object.defineProperty(myObj, symbolRef,
    {enumerable: false});

console.log(myObj);
console.log(myObj[symbolRef]);

console.log("--------------------------");

const _id =  Symbol();
const _name = Symbol();

class Manager{
    [_id];
    [_name];
    constructor(id, name) {
        this[_id] = id;
        this[_name] = name;
        Object.defineProperty(this, _id, {enumerable: false})
        Object.defineProperty(this, _name, {enumerable: false})
    }
    print(){
        console.log(this[_id], this[_name]);
    }
}
let m001 = new Manager('M001', 'Buddhi');
m001.print();
console.log(m001);
m001.print();

console.log("=========================");

// class Order{
//
// }
function Order(){
    if (!new.target) throw new Error("jdfaskljfadkl");
}
// Order();
new Order();















