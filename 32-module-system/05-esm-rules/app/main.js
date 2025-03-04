console.log("Hello App!");

import {x} from './first.js';
import {y} from './first.js';
import {myFn} from './first.js';
import abc from './first.js';
import * as m1 from './first.js';

// import {x, y, myFn} from './first.js';
// import abc from './first.js';

// import abc, {x, y, myFn} from './first.js';

console.log(x, y);
myFn();

console.log(new abc());

console.log(m1.x, m1.y);
console.log(new m1.default());

import {Customer as c} from "./second.js";
import './second.js';

console.log(new c());

import third, {Student, Teacher, s} from "./third.js";

console.log(new Student());
console.log(new Teacher());
console.log(s);
console.log(new third());

import mDefault, {m1 as m11, m2 as m12} from './core/core.js';

console.log(new m11());
console.log(new m12());
console.log(new mDefault());