myFun(10,20,30);
myFun(10,20);
myFun(10);
myFun();
console.log("Start");
function myFun(){
    console.log("myFun()");
}

function myFun(a, b){
    console.log("myFun(a,b)");
}

function myFun(a){
    console.log("myFun(a)");
}

function myFun(a,b,c){
    console.log("myFun(a,b,c)");
}
console.log("End");
var x = 10;
console.log(x);
console.log(myFun);
let abc = myFun;
let edf = myFun;

abc();
edf();
const myMethod = execute(abc);
myMethod();

function execute(param){
    param();
    return param;
}