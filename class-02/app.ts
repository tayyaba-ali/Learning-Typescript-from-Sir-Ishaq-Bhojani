type Person = {
    name: string;
    rollNo: number;
    email: string;
    hobbies: string[];
}

const person1: Person = {
    name: "Tayyaba",
    rollNo: 653853,
    email: "ta6402792@gmail.com",
    hobbies:[]
}

person1.hobbies=["reading"]

console.log(person1)


const person2: Person[] = [];

person2.push({
    name: "Umra",
    rollNo: 7888,
    email: "umra45@gmail.com",
    hobbies:["cooking"]
})
console.log(person2);
