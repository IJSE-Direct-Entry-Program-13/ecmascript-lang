let obj1 = new Object();
let obj2 = {};

obj1.id = 'C001';
obj2.name = 'Kasun';

console.log(obj1);
console.log(obj2);

let contact = '071-1234567';

let customer = {
    contact,
    id: 'C001',
    ['na' + 'me']: 'Kasun',
    address: 'Galle',
    print(){
        console.log(this.id, this.name, this.address);
    }
};

// let customer = {};
// customer.contact = contact;
// customer.id = 'C001';
// customer['na' + 'me'] = 'Kasun';
// customer.address = 'Galle';
// customer.print = function(){
//     console.log(this.id, this.name, this.address);
// }

customer.print();
console.log(customer);
console.log('id' in customer)
console.log('name' in customer)
console.log('address' in customer)
console.log('print' in customer)
for(const property in customer)console.log(property);

