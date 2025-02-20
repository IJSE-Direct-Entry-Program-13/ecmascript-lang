let a = 10, b = 20, c = 30, d = 40;
let array = [a, b, c, d];
// let num1 = array[0];
// let num2 = array[1];
// let num3 = array[2];
// let num4 = array[3];
// console.log(num1, num2, num3, num4);

// Array Destructuring Assignment
let [num1, num2, num3, num4] = array;
console.log(num1, num2, num3, num4);

let obj = {
    id: 'C001',
    name: 'Kasun',
    contact: '011-1234567'
};

// Object Destructuring Assignment
let {id, name, contact} = obj;
console.log(id, name, contact);

let nums = [10, 20, 30, 40, 50];
let [n1, , , n4] = nums;
console.log(n1, n4);

let [v1, v2, v3, v4] = [10, 20];
console.log(v1, v2, v3, v4);

let [val1 = 10, val2 = 20, val3 = 30, val4 = 40] = [1, undefined, 2];
console.log(val1, val2, val3, val4);

console.log("-------------------");

let [k1, k2, ...k3] = [1, 2, 3, 4, 5, 6];
console.log(k1, k2);
console.log(k3, Array.isArray(k3));

console.log("-------------------");

let [a1, , a3, ...[a4, , ...a5]] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a1, a3, a4, a5);

console.log("-------------------");

let [x1, [x2, , ...x3], , ...x4] = [10, [20, 30, 40, 50], 60, 70, 80];
console.log(x1, x2, x3, x4);

console.log("-------------------");

// var [x, y] = [10,20];
// const [x, y] = [10,20];
// let [x, y] = [10,20];

// var x, y;
let x, y;
[x, y] = [10, 20];

let m = 10, n = 20;
[n, m] = [m, n]
console.log(m, n);

console.log("-------------------");

let obj1 = {
    id: "C001",
    name: 'Kasun',
    contact: '011-1234567'
}

let {id: cId, contact: cContact} = obj1;
console.log(cId, cContact);
