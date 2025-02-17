var a = 10;
let b = 20;

// var myFun = new Function();
function myFun(){
    // var a = 30;
    // let b = 40;
    console.log(a, b);
    console.log(this === globalThis);
}

myFun();
console.log(a,b);
console.log(this);


