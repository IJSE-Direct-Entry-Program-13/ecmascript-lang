export class Student {
    constructor() {
        console.log("Student()")
    }
}
let something = "Crazy";
class Teacher{
    constructor() {
        console.log("Teacher()");
    }
}
class Employee{
    constructor() {
        console.log("Employee")
    }
}
export {something as s, Teacher, Employee as default};

