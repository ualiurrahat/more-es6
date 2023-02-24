let numbers = [10,17,19,33,25,18,62,77,100,85,59,79,22,65];
// filter(): checks condition on each elements on array and returns new array
let numAboveThirty = numbers.filter(number => number >30);
console.log(numAboveThirty);
// find(): checks a condition and returns the first number satisfying the condition.
// it does not return array. just a number or type of elements inside the array
let firstNumAboveThirty = numbers.find(num =>num>30);
console.log(firstNumAboveThirty, typeof firstNumAboveThirty);