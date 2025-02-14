function myFun(param1 = 10,
               param2 = {},
               param3 = 10 * 2) {
    console.log("I am a function");
    console.log(param1, param2, param3);
}

myFun(10, 'ijse', true);
myFun('ijse', [], new Date());
myFun();
myFun('abc');
myFun('abc', void (0), 30);
myFun('abc', null, 30);

function myFun2(param1) {
    console.log();
}

console.log("----------");
myFun2();
myFun2(10,20,30,450,50,60,70);

console.log("-----------------");

function myFun3(x){
    console.log(arguments);
    console.log(arguments.length);
    console.log(x, arguments[1], arguments[2]);
}

myFun3(10,20,30,40);
//console.log(arguments);

function myFun4(param1, ...rest){
    // for (let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i]);
    // }
    // console.log(Array.isArray(arguments));
    // for(const value of arguments) console.log(value);
    console.log(param1);
    console.log(Array.isArray(arguments), Array.isArray(rest));
    console.log(rest[0], rest[1], rest[2]);
}

console.log("-----------------");
myFun4('kasun', 10, false, {});

function myFun5(param1 = true ? "hello": "world"){

}