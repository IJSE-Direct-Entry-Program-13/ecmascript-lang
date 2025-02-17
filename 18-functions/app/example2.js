let a;

function myFun(){

    let b = 20;
    a = function(){
        console.log(b);
    }
    b = 30;
}

myFun();
a();