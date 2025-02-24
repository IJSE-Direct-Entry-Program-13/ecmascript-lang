let nums1 = [10,20,30,40];
let nums2 = [1,2,3, ...nums1, 4,5];
console.log(nums2);

let arr1 = ['Kasun', 'Nuwan', 'Ruwan', 'Supun'];
let arr2 = [...arr1];
console.log(arr2);

let obj1 = {
    id: 'C001',
    name: 'Kasun',
    contact: '011-1234567'
};
Object.defineProperty(obj1, "name", {enumerable: false});
let obj2 = {...obj1, gender: 'male'};
console.log(obj2);

// console.log(...obj1);
// console.log(id: 'C001', name: 'Kasun');

// Spread syntax with object reference is only allowed within an object
console.log({...obj1});
console.log({id: 'C001', name: 'Kasun'});

// Spread syntax with array reference is allowed when invoking methods
console.log(...nums1);
console.log(10, 20, 30, 40);

let str = "Hello";
console.log(...str);
let chars = [...str];
console.log(chars);

console.log({...nums1});
console.log({...str});

obj1[Symbol.iterator] = function* (){
    yield 'a';
    yield 'b';
    yield 'c';
}
console.log([...obj1]);
