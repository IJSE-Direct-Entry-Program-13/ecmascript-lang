import * as f from './first.js';
import {MyClass2, x, y} from './second.js';

console.log("Main module");

console.log(f.x, f.y, new f.MyClass());
console.log(x, y, new MyClass2());
