import * as f from "./first.js";
//import {MyClass2, x, y} from "./second.js";

console.log("Hello App!");

const {MyClass2, x, y} = await import('./second.js');

console.log(f.x, f.y, new f.MyClass());
console.log(x, y, new MyClass2());
