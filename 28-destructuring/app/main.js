let [x, y, ...[z, , w]] = [10, 20, 30, 40, 50, 60];
console.log(x, y, z, w);
let {length: length, slice, splice} = [10, 20, 30];
console.log(length, slice, splice);
let [a, b, ...{length: l}] = [10, 20, 30, 40];
console.log(l);

let {
    id,
    name: customerName,
    address = 'Galle',
    marriedStatus: status = "married",
    ...other
} = {
    id: 'C001',
    name: 'Kasun',
    gender: 'Male',
    address: void (0),
    marriedStatus: 'single',
    telephone: '011-1234567',
    qualifications: 'BSc (Hons) in Engineering'
};

console.log(id, customerName, address, status);
console.log(other);

let {
    id: eId,
    // name: eName
    name: {
        first: eFirst,
        last: eLast
    }
} = {
    id: 'E001',
    name: {
        first: 'Kasun',
        last: 'Sampath'
    },
    address: 'Panadura'
};
console.log(eId);
console.log(eFirst, eLast);

console.log("-------------------------");

let x1, x2;
[x1, x2] = [10,20];
console.log(x1,x2);

let sId, sName;
({id: sId, name: sName} = {id: 'S001', name: "Kasun"});
console.log(sId, sName);

console.log("-------------------------");

function print({id, name}, comment){
    console.log(id, name, comment);
}
let c = {
    id: 'C001',
    name: 'Kasun',
    address: 'Galle',
    contact: '011-1234567'
};
print(c, 'This is a comment');

console.log("-------------------------");
let c1 = {id: 'C001', name: 'Kasun', address: 'Galle'};
let c2 = {id: 'C002', name: 'Nuwan', address: 'Matara'};
let c3 = {id: 'C003', name: 'Ruwan', address: 'Panadura'};
let customers = [c1, c2, c3];
for(let {id, name} of customers){
    console.log(id ,name);
}








