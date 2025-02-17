let a = 10;

function myFun(x){
    let b = x + a;
    return function(y){
        console.log(y, b);
    }
}

const f = myFun(5);
a = 15;
f(20);
myFun(2)(5);