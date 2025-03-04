// import {Module1} from "./module1.js";
// import {Module2} from "./module2.js";
// import {Module3} from "./module3.js";
//
// export {Module1 as m1, Module2 as m2, Module3 as m3};

//==========================================

// new m1();

console.log(import.meta.url);

export {Module1 as m1} from './module1.js';
export {Module2 as m2} from './module2.js';
export {Module3 as default} from './module3.js';

// new m2();
// new Module3();