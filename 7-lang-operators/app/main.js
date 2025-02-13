console.log("Operators");

let x = 10;
console.log(x++, x);
console.log(x--, x);

let y = 10;
console.log(++y, --y);

let a = 10;
console.log(+a);
console.log(-a);

let b = "5";
console.log(b + 5);
console.log(+b + 5);
console.log(-b + 5);
console.log(+5);
console.log(-5);
// console.log(+5n);
// console.log(-5n);
// console.log(+Symbol());
// console.log(-Symbol());
console.log(+undefined, -undefined);
console.log(+null, -null);
console.log(+(5 > 10), -(5 > 10));
console.log(+false, -false);
console.log(+(5 < 10), -(5 < 10));
console.log(+true, -true);
console.log(+"");
console.log(+"  ");
console.log(+"  5", -"   5");

let myObj = {};
myObj.valueOf = () => "20";
myObj.toString = ()=> 10;
console.log("valueOf()", myObj.valueOf());
console.log("toString()", myObj.toString());
console.log(+myObj, -myObj);

// -(x)-1
let c = 5;
console.log(~c);
let d = -5;
console.log(~d);
console.log(~-5.0);
console.log(~-5.555);
console.log(~-5.8999);

console.log("---------");
console.log(!false);
console.log(!true);
console.log(!!true);

console.log("---------");
console.log(!!0, !!0.00);
console.log(!!10, !!0.5);
console.log(!!10n, !!Symbol());
console.log(!!"",!!"ijse", !!"    ");
console.log(!!"0",!!"0.0");
console.log(!!null,!!undefined, !!NaN);
console.log(!!{},!![], !![10,20]);
console.log(NaN, +Infinity, -Infinity);

console.log("---------");
console.log(void 10);
console.log(void (10 + 5));
console.log(void "ijse");
console.log(void true);
console.log(undefined);

let myNum = 10;
console.log(void myNum++);
console.log(myNum);

console.log("---------");
console.log(typeof 10);
console.log(typeof 0.25);
console.log(typeof 10n);
console.log(typeof "ijse");
console.log(typeof (10 + "ijse"));
console.log(typeof (5 > 2));
console.log(typeof false, typeof true);
console.log(typeof `hello`);
console.log(typeof 'hello');
console.log(typeof void(0));
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof [10,20]);
console.log(typeof myObj);
console.log(typeof null);
console.log(typeof !!{});
console.log(typeof +{});
console.log(typeof +"10");

console.log("---------");

let customer = {};
console.log(typeof customer);
console.log(customer);
customer.id = 'c001';
customer.name = 'Kasun';
customer.address = 'Galle';
console.log(customer);
console.log(customer.id);
console.log(customer.name);
customer.print = function(){
    console.log(this.id, this.name, this.address);
}
customer.print();
delete customer.id;
delete customer.name;
delete customer.print;
console.log(customer.id);
delete console.log;
//console.log("hello");