function myFun1(id, name){
    console.log("myFun1", id, name);
}

var myFun2 = function(id, name){
    console.log("myFun2", id, name);
}

let myFun3 =
    new Function("id", "name", "console.log('myFun3', id, name)");

myFun1('C001', 'Kasun');
myFun2('C002', 'Nuwan');
myFun3('C003', 'Ruwan');
console.log("------------");
var name = 'Kasun';

function myMethod(){
    console.log(name);
    //var name = 'Nuwan';
    console.log(name);

    if (false) {
        var name = "Ruwan";
        console.log(name);
        let address = 'Galle';
        console.log(address);
    }
    //console.log(address);
    console.log(name);
}

console.log(myMethod());
console.log(name);