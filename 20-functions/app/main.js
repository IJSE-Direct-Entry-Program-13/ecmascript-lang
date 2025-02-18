function awesomeFn(param1, param2, param3) {
    console.log("Who the heck called me?");
    console.log("Param1: ", param1);
    console.log("Param2: ", param2);
    console.log("Param3: ", param3);
}

// awesomeFn('Param1', 'Param2');
// awesomeFn.apply(globalThis, ['Param1', 'Param2']);
// awesomeFn.call(globalThis, 'Param1', 'Param2');

awesomeFn`This is a ${'tagged'} template string 
since ${'ECMAScript' + 2015} and it's awesome`;

console.log("arg1", 10, []);
console.log`This is a ${10} string${20*2}`;