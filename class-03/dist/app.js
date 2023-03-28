"use strict";
// Tuples
// Tuples is array of fixed elements already you have idea that how many will be your array elements
// In normal arrays we first define the type and initialize the array
// example let numbers:number[]=[]
// But in tuple me don't define the type outside me define the type inside array
let gender = ["Male", "Female"];
// we defined that we have an array of fixed elements having the length 2
// 1 problem in tuples
//if we use the push method it will accept the element it is underobservation in TS
gender.push("Tiktokers"); // didn't complain
const Admin = [1, "Admin"];
const error = [404, "Not found"];
// Class
// starting with the Capital letter and single
// class Student{
//  // here first specify the parameters type
//    public name: string;
//    private rollNo: number;
//     // the upper keys and types are different from the constructor parameters
//     constructor(n:string,r:number) {
//         this.name= n,
//             this.rollNo=r
//     }
// }
// Shorthand
// if you don't want to initialze in the constructor like this
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.skills = [];
        this.name = name;
        this.rollNo = rollNo;
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
}
// We can access when they are public
const student1 = new Student("Tayyaba", 123);
// console.log(student1);
// console.log(student1.name);
// console.log(student1.rollNo);
// If they are private we can't access
// console.log(student1.rollNo); // private
// console.log(student1.name);
// student1.skills.push("Javascript HTML") // can't accessible
// But here a problem comes into the picture if somebody vanishes the elements of the skills array like this
// student1.skills.length = 0
// It will make the length of the array to 0
// To restrict from this we can use the private excess modifier
// After doing this our push won't work so how can we add the skills
// we can make a function which will push that skill in the skills array but don't have the direct access of the skills length
student1.addSkill("Javascript");
// student1.skills  // can't access 🤧
console.log(student1);
//readonly modifier to just read can't modify
const student2 = new Student("Umra", 234);
student2.addSkill("HTML");
console.log(student2);
console.log(student2.rollNo);
// student2.rollNo=890  //read-only
//# sourceMappingURL=app.js.map