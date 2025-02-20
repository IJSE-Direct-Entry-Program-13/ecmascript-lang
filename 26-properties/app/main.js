// Data Properties

let obj1 = {};
obj1.id = 'C001';
obj1.name = 'Kasun';
obj1['con' + 'tact'] = '011-1234567';
console.log(obj1);

let obj2 = {
    id: 'C001',
    name: 'Kasun',
    ['con' + 'tact']: '011-1234567'
};
console.log(obj2);

class MyObj {
    id;
    name;
    ['con' + 'tact'];

    constructor(id, name, contact) {
        this.id = id;
        this.name = name;
        this.contact = contact;
    }
}

let obj3 = new MyObj('C001', 'Kasun', '011-1234567');
console.log(obj3);

// Accessor Properties

let obj4 = {
    _id: 5,
    _name: 'Kasun',
    getId: function () {
        return 'E-' + this._id;
    },
    getName: function () {
        return this._name;
    }
};
console.log(obj4._id, obj4._name);
obj4._id = '200';
console.log(obj4.getId(), obj4.getName());

let obj5 = ((id, name) => {
    return {
        getId: function () {
            return 'E-' + id;
        },
        getName: function () {
            return name;
        },
        setId: function(value){
            id = value;
        }
    }
})(1, 'Kasun');
console.log(obj5.id, obj5.name);
obj5.setId(100);
console.log(obj5.getId(), obj5.getName());

//========================================

let obj6 = ((id, name) => {
    return {
        get id () {
            return 'E-' + id;
        },
        get name () {
            return name;
        },
        set id(value){
            id = value;
        }
    }
})(1, 'Kasun');
console.log(obj6);
console.log(obj6.id, obj6.name);
obj6.id = 100;

console.log("---------------------------");

class Employee{
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }
    get id(){
        return 'E' + this.#id;
    }
    set id(id){
        this.#id = id;
    }
    get name(){
        return this.#name;
    }
}

let obj7 = new Employee(1, 'Kasun');
obj7.id = 100;
console.log(obj7.id);
