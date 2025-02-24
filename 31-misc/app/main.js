let str = 'this is a string';
console.log(str.substring(2,4));
console.log(str.substr(2,2));

// let pattern = new RegExp("^\\d{3}-\\d{7}$");
let pattern = /^(?<code>\d{3})-\d{7}$/;
console.log(pattern.test('011-1234567'));
console.log(pattern.test('011-1234567888'));

console.log("077-1234567".match(pattern));
console.log("077-1234567888".match(pattern));

console.log(pattern.exec("077-1234567"));

console.log("------------------------");

const tmrId1 = setTimeout(()=>{
    console.log("Why am I late?");
}, 5000);

const tmrId2 = setInterval(()=>{
    console.log("What the heck man?");
}, 2000);

clearTimeout(tmrId1);
clearInterval(tmrId2);
