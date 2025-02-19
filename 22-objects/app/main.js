// let c1 = {
//     id: 'C001',
//     name: 'Kasun',
//     address: 'Galle',
//     print(){
//         console.log(this.id, this.name, this.address);
//     }
// }
//
// let c2 = {
//     id: 'C002',
//     name: 'Nuwan',
//     address: 'Matara',
//     print(){
//         console.log(this.id, this.name, this.address);
//     }
// };
//
// let c3 = {
//     id: 'C003',
//     name: 'Ruwan',
//     address: 'Panadura',
//     print(){
//         console.log(this.id, this.name, this.address);
//     }
// };
//
// console.log(c1);
// console.log(c2);
// console.log(c3);

function Customer(id, name, address){
    this.id = id;
    this.name = name;
    this.address = address;
    this.print = function(){
      console.log(this.id, this.name, this.address);
    };
}

let c1 = new Customer('C001', 'Kasun', 'Galle');
let c2 = new Customer('C002', 'Nuwan', 'Matara');
let c3 = new Customer('C003', 'Ruwan', 'Panadura');

console.log(c1);
console.log(c2);
console.log(c3);

function Employee(id, name){
    this._id = id;
    this._name = name;
    this.getId = function(){
        return "E" + this._id;
    }
    this.getName = function(){
        return this._name;
    }
}

function Item(code, qty, price){
    this._code = code;
    this._qty = qty;
    this._price = price;
    this.getDiscountedPrice = function(discount){
        return this._price - discount;
    }
    this.print = function(){
        console.log(this._code, this._qty, this._price);
    }
}














