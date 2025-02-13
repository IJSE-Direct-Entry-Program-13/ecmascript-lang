debugger;
console.log("Hello App!");
let myObj = {};
var outerVar = "Where am I?";
let myLocalVar = "Where am I?";

function myFun1(){
    var myVar = "Where am I";
    let var1 = "Hello";
    console.log("Enter into myFun1");
    myFun2();
    console.log("Exit from myFun1");
}

function myFun2(){
    var something = "Where am I";
    let var1 = 10, var2 = 20;
    console.log("Enter to myFun2");
    console.log("Exit from myFun2");
}

myFun1();
