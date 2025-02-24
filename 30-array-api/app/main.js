// ECMAScript Arrays are,
//  1. Dynamic
//  2. Loosely Typed

/* Array Creation */
let arr1 = [];
let arr2 = new Array();

let arr3 = [10, 20, 30, 40, 50];
let arr4 = new Array(5);
let arr5 = new Array(5, 10, 15, 20, 25);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log('--------------');

let arr6 = [10, 20, 30];
console.log(arr6[0], arr6[1], arr6[2]);
console.log(arr6[100], arr6[-100]);
arr6[-100] = -100;
arr6[100] = 100;
console.log(arr6[100], arr6[-100]);
console.log(arr6.length);

console.log('--------------');
let arr7 = [1, 2, 3];
arr7[10] = 10;
arr7[-10] = 10; // Negative indexes are not stored as array elements
console.log(arr7);
console.log(arr7.length);

console.log('--------------');
// Array API;

let nums = [10, 20, 30];
console.log(nums.length);
nums.push(40);      // Append
console.log(nums);
nums.push(50, 60, 70);
console.log(nums);

nums.unshift(0);    // Prepend
console.log(nums);
nums.unshift(-20, -15, -10, -5);
console.log(nums);

let removedElm = nums.pop();
console.log("Popped:", removedElm);
console.log(nums);

removedElm = nums.shift();
console.log("Shifted:", removedElm);
console.log(nums);

let names = ['Kasun', 'Nuwan', 'Ruwan'];
console.log(names);
// names[1] = 'Sampath';
// console.log(names);
names.splice(1, 1, 'Sampath', 'Ramindu', 'Kusal');
console.log(names);

nums = [1, 5, 7];
nums.splice(1, 0, 2, 3, 4);
console.log(nums);
nums.push(8, 9, 10);
console.log(nums);
nums.splice(5, 0, 6);
console.log(nums);
const removedElements = nums.splice(2, 6);
console.log(removedElements);
console.log(nums);

console.log("-------------------");
nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.slice());
console.log([...nums]);
console.log(nums.slice(2));
console.log(nums.slice(2, 5));

console.log("--------------------");
nums = [100, 200, 300, 400, 300, 500];
console.log(nums[2], nums.at(2));
console.log(nums.indexOf(300));
console.log(nums.lastIndexOf(300));
console.log(nums.includes(300), nums.includes(350));
console.log("--------------------");
console.log(nums.findIndex((value) => value === 300));
console.log(nums.findLastIndex((value) => value === 300));
console.log(!!nums.find(value => value === 300),
    !!nums.find(value => value === 350));

console.log("--------------------");
let c1 = {id: 'C001', name: 'Kasun'};
let c2 = {id: 'C002', name: 'Nuwan'};
let c3 = {id: 'C003', name: 'Ruwan'};
let customers = [c1, c2, c3];
console.log(customers.includes(c2));
console.log(customers.includes('C002'));
console.log(!!customers.find((ref) => ref.id === 'C002'));

console.log("--------------------");
nums = [10, 20, 30, 40, 50];
nums.forEach((value) => console.log(value));
console.log('---------------------');
for (const value of nums) console.log(value);
console.log('---------------------');
const newNums = nums.map((value) => value / 5);
console.log(newNums);
const pebals = ['loku', 'podi', 'loku', 'podi', 'loku', 'loku'];
console.log(pebals.filter((value) => value === 'loku'));
const rathuLokuPebals = pebals.filter((value) => value === 'loku')
    .map((value) => 'rathu-pata-loku-pebals');
console.log(rathuLokuPebals);

nums.reverse();
console.log(nums);
const values = [1,2,3,4,5];
const newValues = values.toReversed();
console.log(values);
console.log(newValues);