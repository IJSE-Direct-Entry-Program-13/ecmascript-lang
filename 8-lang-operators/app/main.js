console.log(2 * 2 * 2);
console.log(2 * 2 * 2 * 2);

console.log(2 ** 3);
console.log(2 ** 4);
console.log(10 ** 4);

console.log(5 * 2);

console.log(5 / 0);
console.log(-5 / 0);

console.log(5.2 / 0);
console.log(-7.2 / 0);

console.log(5 % 3, 5 % -3);
console.log(5.2 % 3, 5.2 % -3);
console.log(-5 % 3, -5 % -3);
console.log(-5.2 % 3, -5.2 % -3);

console.log("--------------");

console.log(10 + 5);
console.log(10 + "abc");
console.log("abc" + "abc");

console.log("--------------");

console.log(5 + 2);
console.log(typeof new Number(2).valueOf())
console.log(5 + new Number(2));
console.log(new Number(5) + new Number(2));

console.log("------------");

console.log(5 + "5");
console.log(typeof new String("5").valueOf())
console.log(5 + new String("5"));
console.log(new String("5") + new String("5"));

console.log("------------");
console.log(5 + {});
console.log(5 + [5]);
console.log(5 + [5,10]);

console.log("------------");
console.log(5 + NaN);
console.log(5 + Infinity);
console.log(5 + -Infinity);

console.log("------------");
console.log(5 + true);
console.log(5 + null);
console.log(5 + undefined);

// console.log(10 + [10]);
// console.log([10] + 10);
//
// console.log(10 + {});
// console.log(10 + [10,20]);
//
// console.log(10 + NaN);
// console.log(10 + Infinity);
// console.log(10 + -Infinity);
//
// console.log(10 + null);
// console.log(10 + undefined);

// console.log(10 + true);
// console.log(10 + (5 > 10));
// console.log(10 + Symbol());

console.log(5 + "5");
console.log(5 - "5");
console.log(5 - true);
console.log(5 - [10]);

console.log(5 - null);
console.log(5 - undefined);
console.log(5 - NaN);
console.log(5 - Infinity);
console.log(5 - -Infinity);

console.log(5 + 5);
console.log(5n + 5n);
console.log(5n - 5n);