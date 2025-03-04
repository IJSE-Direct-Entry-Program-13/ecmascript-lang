export let x = 10;
export const y = 20;

export default class MyClass {
    constructor() {
        console.log("My Class");
    }
}

export function myFn(){
    console.log("my Fn()");
}

export var result = x + y;
// export result *= 2;          // ❌
// export default result *=2;   // ✅

// export keyword can't be used with an expression
// unless it is a default export

console.log("===================");
