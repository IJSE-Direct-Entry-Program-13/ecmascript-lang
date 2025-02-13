let flag = false;

if (flag) console.log("Flag is true"); else console.log("Flag is false");

if ([]) console.log("Array is truthy");
if (0) console.log("Zero isn't truthy"); else console.log("Zero is falsy");

let ref = null;
if (ref) console.log("Ref is not null"); else console.log("Ref is null");

let customer = {};
customer.id = 'C001';
customer.name = "Kasun";
if (customer.id) console.log(customer.id);
if (customer.name) console.log(customer.name.toUpperCase());

let myVar = {};
let x = 0;
while (myVar) {
    console.log(x++);
    if (x === 5) myVar = "";
}

console.log("-----------");

x = 0;
do console.log(x++); while (x < "5");

console.log("-----------");

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("-----------");

for (let i = 0, k = 0; i <= k; i++, k = 4) {
    console.log(i);
}

console.log("-----------");

myVar = [], x = 0;
for (; myVar;) {
    console.log(x++);
    if (x > 5) myVar = null;
}

console.log("-----------");

for (console.log("Init"), x = 0;
    [];
     console.log("Update"), console.log("Update2"), x++) {
    if (x === 5) break;
}

console.log("-----------");

// for(let i = 0, const k = 5;
//     i < k ;i++){
//     console.log(i);
// }

// for..in ECMAScript 5 (Since 2009)
// for..of ECMAScript 6 (Since 2015)

let supplier = {};
supplier.id = 'C001';
supplier.name = 'Kasun';
supplier.address = 'Galle';

supplier.print = function () {
}

console.log("id" in supplier,
    "name" in supplier,
    "address" in supplier,
    "contact" in supplier);

for (const property in supplier) {
    console.log(property);
}

let nums = [10, 20, 30, 40, 50];

for (const index in nums) {
    console.log(index, nums[index]);
}

console.log(supplier.id);
console.log(supplier['id']);
console.log(supplier['i' + 'd']);

supplier.print = function () {
    console.log("Supplier");
}

supplier.print();
supplier['print']();
supplier['pri' + 'nt']();

console.log(nums[0]);

// supplier.0 = 'Hello';
supplier[0] = 'hello';

console.log("-------------");

for (const property in supplier) {
    console.log(property, supplier[property]);
}

console.log("-------------");

let student = {};
student.id = 'S001';
student.name = 'Kasun';
student.address = 'Galle';

Object.defineProperty(student, 'name', {
    enumerable: false
});

console.log("name" in student);
console.log(student.name, student['name']);

for (const property in student) console.log(property);

console.log("-------------");

// for(const value of student) console.log(value);
for (const value of nums) console.log(value);

console.log("-------------");

const teacher = {};
const iterator = {};
const iteratorResult = {};
const values = ['Kasun', 'Nuwan', 'Ruwan'];
let i = 0;

iterator.next = function () {
    iteratorResult.value = values[i++];
    iteratorResult.done = i > values.length;
    return iteratorResult;
}
teacher[Symbol.iterator] = function () {
    return iterator;
}

for (const value of teacher) console.log(value);

console.log("-------------");

const client = {};
client.id = 'C001';
client.name = 'Kasun';
client.address = 'Galle';
client.contact1 = '011-1234567';
client.contact2 = '033-1234567';
client.contact3 = '077-1234567';

// const contactIterator = {};
// let result = {};
// let y = 0;
// result.done = false;
// contactIterator.next = function () {
//     if (y > 2) result.done = true;
//     if (y === 0) result.value = client.contact1, y++;
//     else if (y === 1) result.value = client.contact2, y++;
//     else if (y === 2) result.value = client.contact3, y++;
//     return result;
// }
//
// client[Symbol.iterator] = function () {
//     return contactIterator;
// };

client[Symbol.iterator] = function*(){
    console.log("First Time");
    yield client.contact1;
    console.log("Second Time");
    yield client.contact2;
    console.log("Third Time");
    yield client.contact3;
};

for (const contact of client){
    console.log(contact);
    console.log("Iteration Completed");
}

let firstGenerator = function*(){
    yield 25;
    yield 26;
    yield 27;
}

let myGenerator = function*(){
    yield 10;
    yield 20;
    yield* firstGenerator();
    yield 30;
}

const myIterator = myGenerator();
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);

for(const value of myGenerator()) console.log(value);

function myFun(){
    console.log("Hello");
    return;
    console.log("World");
}

myFun();

let employee = {};
employee.id = 'e001';
employee.name = 'kasun';
employee.address = 'panadura';
employee.print = function(){
    console.log(this.id, this.name, this.address);
};

// console.log(employee.id);
// console.log(employee.name, employee['name']);
// console.log(employee.address);
// employee.print();

let address = 'Colombo';

with(employee){
    console.log(id);
    console.log(name);
    console.log(address);
    print();
}

let day = 'Monday';

switch(day){
    default:
        console.log("Some day");
    case "sunday":
        console.log("Sunday");
        break;
    case "monday": case "Monday":
        console.log("Monday");
    case "tuesday":
        console.log("Tuesday");
}

first:
{
    console.log("Hello");
    if ([]) break first;
    console.log("Second");
}

let manager = {};
try {
    console.log(manager.name.toUpperCase());
}catch(e){
    // console.log(e);
    console.log("No name found");
}finally {
    console.log("I am also ban choon...!")
}

console.log("----------");
myFun1();
function myFun1(){
    try{
        myFun2();
    }catch(e){
        if (e instanceof TypeError){
            console.log("type error");
        }else if (e instanceof SyntaxError){

        }
        console.log("Caught in myFun1");
    }
}
function myFun2(){
    try {
        const myObj = {};
        console.log(myObj.name.toUpperCase());
        console.log("myFun2 continued?");
    }finally{
        console.log("Finally in myFun2");
        //return 10;
    }
    console.log("Exit myFun2");
}
console.log("--------------");
console.log("Log messages");        // System.out.println()
console.error("Error Message");     // System.err.println();
console.info("Info message");
console.warn("Warning messages");


try{
    console.log("Enter into try block");
    throw new Error("New Error for ECMA Engine");
    console.log("About to exit from try block");
}catch(e){
    console.log(e.message);
    console.log(e);
}

try {
    console.log("Enter into second try block");
    throw [10,20,30];
    console.log("About to exit from the try block");
}catch(e){
    console.log("Caught: " + e);
}

var myValue = 10;
try{
    console.log("Enter into third try block");
    throw new Error("Something went wrong");
}catch(myValue){
    myValue = 20;
    console.log(myValue);
}
console.log(myValue);

