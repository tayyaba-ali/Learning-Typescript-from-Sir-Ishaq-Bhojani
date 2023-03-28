

// Tuples

// Tuples is array of fixed elements already you have idea that how many will be your array elements

// In normal arrays we first define the type and initialize the array
// example let numbers:number[]=[]

// But in tuple me don't define the type outside me define the type inside array

let gender: [string, string] = ["Male", "Female"]

// we defined that we have an array of fixed elements having the length 2

// 1 problem in tuples

//if we use the push method it will accept the element it is underobservation in TS

gender.push("Tiktokers")  // didn't complain

const Admin:[number,string]=[1,"Admin"]
const error:[number,string]=[404,"Not found"]
