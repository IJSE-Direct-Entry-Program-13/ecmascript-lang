// integer bitwise & ^ |
console.log(5 & 3, 5.8 & 3.3);
console.log(5 ^ 3, 5.8 ^ 3.3);
console.log(5 | 3, 5.8 | 3.3);

// logical & ^ |
let x = 10;
let y = 20;
console.log(x++ > y & y++ > x)
console.log("x:", x, "y:", y);
console.log(y++ > x ^ x++ > y)
console.log("x:", x, "y:", y);
console.log(y++ > x | x++ > y)
console.log("x:", x, "y:", y);

console.log(5 ^ 2 & 3 | 2);

// conditional & |
x = 10, y = 20;
console.log(x++ > y && y++ > x);
console.log("x:", x, "y:", y);
x = 10, y = 20;
console.log(y++ > x || x++ < y++);
console.log("x:", x, "y:", y);

// ?? Nullish Coalescing Operator
let value1 = null;
let value2 = undefined;
let value3 = false;

console.log(value1 ?? 'hey');
console.log(value2 ?? 'how are you');
console.log(value3 ?? 'why me?');

console.log([] ? "hey" : "world");
console.log(NaN ? "hey" : "world");
console.log("0.0" ? "hey" : "world");
console.log(+"0.0" ? "hey" : "world");

console.log(!![] ? (+"5" ? "dn" : "mata") : (!{} ? "hodatama" : "athi"));

console.log("--------------");
x = 10;
let myVar = false;
// myVar = myVar && x++ > 5;
myVar &&= x++ > 5;
console.log(myVar, x);

x = 10;
myVar = true;
// myVar = myVar || x++ > 5;
myVar ||= x++ > 5;
console.log(myVar, x);

myVar = null;
myVar ??= 'Default value';
console.log(myVar);

let var1 = 10, var2 = 20, var3 = 30;
var1 = 15, var2 = 25, var3 = 35;
console.log(var1, var2, var3);

let supplier = {};
supplier.id = 'S001';
supplier.name = 'Kasun';

delete supplier?.name;

console.log(supplier?.id);

console.log(supplier.name?.toUpperCase());
supplier.print?.call();