// map,filter,find,forEach,reduce.
// reduce() : The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

let numbers = [17,33,31,35,95];
// .reduce((accumulatorFunction,initialValue))
// accumultorFunction has two paramerter
// .reduce(accumulator,currentValue)=> accumulator+currentValue,initialValue);
// let sum = numbers.reduce((previous, current) => previous+current,0);
let sum = numbers.reduce((previousSum,currentValue) =>{
    console.log(previousSum,currentValue);
    return previousSum+currentValue;
},0);
console.log(sum);


// dot notation
const student = {
    marks: {
        math : 73,
        physics: 98,
        biology: 95,
        chemistry: 88
    }
};

// ways to access student's marks
// 1. using dot properties of object keys.
let mathMarks = student.marks.math;
console.log(mathMarks);
// 2. using direct name of the object keys and proeperties.
let mathMarks2 = student['marks']['math'];
console.log(mathMarks2);
// 3. keep object properties into variable then use it
let subject = 'math';
let mathMarks3 = student.marks[subject];
console.log(mathMarks3);

// **** Note this:
// console.log(student.marks.subject); 
// this will be undefined.
// because subject is not a property of student object.
// it is a var. use var inside third brackets.
// right way: console.log(students.marks[subject]);
//NOTE: we can not apply dot property on var. can be applied directly on object properties.
