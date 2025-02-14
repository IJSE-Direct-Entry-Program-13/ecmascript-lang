console.log("Start");
myFn1();
console.log(myFn1);
console.log(myFn2);

function myFn1() {
    console.log("myFn1()");
}

var myFn2 = function () {
    console.log("myFn2()");
}

console.log(myFn2);
myFn2();
console.log("End");

(function () {
    console.log("IIFE");
})();

(() => {
    console.log("IIFE");
})();

let myArrowFn = (a, b) => a + b;
console.log(myArrowFn(10, 20));

let myArrowFn2 = (a, b) => {
    console.log("Enter");
    console.log(a + b);
    console.log("Exit");
}
myArrowFn2(10, 20);

console.log("---------------");

((() => console.log)())("ijse");

const arrowFn3 = () => console.log;
const log = arrowFn3();
log("ijse");
arrowFn3()("ijse");
(() => console.log)()("ijse");

console.log("---------------");

var myNum = 10;
function changeNum1() {
    var myNum = 20;
    console.log(myNum, this);
}
changeNum1();
console.log(myNum, this);
console.log("-----------");
let changeNum2 = function () {
    var myNum = 20;
    console.log(myNum, this);
};
changeNum2();
console.log(myNum, this);
console.log("-----------");
(function () {
    var myNum = 20;
    console.log(myNum, this);
})();
console.log(myNum, this);
console.log("-----------");
let changeNum3 = () => {
    var myNum = 20;
    console.log(myNum, this);
};
changeNum3();
console.log(myNum, this);
console.log("-----------");
(()=>{
    var myNum = 20;
    console.log(myNum, this);
})();
console.log(myNum, this);

// console.log(this);
//
// (() =>{
//     console.log(this);
// })();

//myMethod();


function myMethod(){
    console.log(this == globalThis);
    (()=>{
        console.log(this == globalThis);
    })();
}

myMethod();
(()=>{
    console.log(this == globalThis);
    console.log(this);
})();

console.log("-----------------");

function myCrazyFn(a, b){
    console.log(a, b);
    console.log(this === globalThis);
    if (this !== globalThis) console.log(this);
};

let dnAmarui = {};
dnAmarui.level = 'hodatama amarui';
dnAmarui.time = '21:18';

myCrazyFn(10,20);
myCrazyFn.call(dnAmarui, 5,10);
myCrazyFn.apply([10,20], [20,30]);

console.log("-----------------");

let s1 = {};
s1.id = 's001';
s1.name = 'buddhi';
s1.print = function (){
    console.log(this.id, this.name);
}
s1.print();

let s2 = {};
s2.id = 's002';
s2.name = 'lahiru';
s2.print = function(){
    console.log(this.id, this.name);
}
s2.print();
s2.print = s2.print.bind(s1);
s2.print();
