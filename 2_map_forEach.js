// task: write a function that takes an array 
// and returns doubles of its element as array 

function makeDouble(inputs) {
    const outputs = [];
    for (input of inputs) {
        const output = input * 2;
        outputs.push(output);
    }
    return outputs;
}
let arr = [10, 20, 30, 40, 50];
console.log(makeDouble(arr));

// now we can do this task simply by using map.
// map(): performs operation on each element of an array and
// returns a new array
let output = arr.map(x => x * 2);
console.log(output);

// more map use
let friends = ["minul hasan", "nayeem alfee", "sharif hossain", "tanvir oyon"];
let firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
let lengths = friends.map(x => x.length);
console.log(lengths);

// now take an objects array and map it
let products = [{ brand: "xiaomi", id: 1, price: 10000 },
{ brand: "nokia", id: 0, price: 20000 },
{ brand: "iphone", id: 3, price: 1000000 },
{ brand: "motorola", id: 10, price: 100 },
];

// now printing using map. since we are using console log, so it will not return array with objects.
// it will show undefined if you print the array.
let lists = products.map(x =>console.log(x));
// console.log(lists); // [undefined,undefined,undefined,undefined]

// forEach(): performs some operation on each elements on array. but it does not return anything.
// map(): returns new array.
// forEach(), map() both do not change the original array.

friends.forEach(element => {
    console.log(element);
});