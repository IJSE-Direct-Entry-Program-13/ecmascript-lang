console.log("Hello App!");

// Single Line Comment
/*
    Multi line comments
 */
/**
 * JS Doc Comments
 */

/* Data Types
* 1. boolean
* 2. number
* 3. string
* 4. symbol
* 5. null
* 6. undefined
* 7. bigint */

/* Literals */
console.log(true);
console.log(false);

// 1. Binary
console.log(0b1010);
console.log(0B1010_1010);
console.log(0b1111_1111);

// 2. Octal
console.log(010);       // Legacy Octal Representation
console.log(0o10);      // New Octal Representation

// 3. Decimal
console.log(10);

// 4. Hexadecimal
console.log(0xA);
console.log(0xff);
console.log(0XABC);

// 5. Floating Point Numbers
console.log(1.25e2);
console.log(1.25E-2);
console.log(0.3 - 0.2);     // IEEE-754

/* Big Int */
console.log(0x1111n);
console.log(0o10n);
console.log(10n);
console.log(0xAn);

/* String */
console.log("I am a string");
console.log('I am a string');
console.log("Let's add a single quote '' here");
console.log('Let\'s add a double quote "" here');
console.log("I am a \n new line here")
console.log('I am a \n new line here')
console.log("🔒", "❌", "This is cool");

/* None-Tagged Template Strings (after 2015) */
console.log(`This is a string also`);
console.log(`Supports: Unicode Characters 🔒`);
console.log(`Escape Sequences: hello \t world!`);
console.log(`I can place ' or "`)
console.log(`Supports: Text Interpolation ${10 + 15}`);
console.log(`Supports: Multiline
Supports: Multiline
Supports: Multiline`);

/* Tagged Template Strings (after 2015) */
crazyText `Hello World`;
crazyText `This is a
           multiline crazy text
           You know, nawa gilunath baan choon`;
function crazyText(){}

console.log(undefined);
console.log(null);

console.log(undefined == null);
