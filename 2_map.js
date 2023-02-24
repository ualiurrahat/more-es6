// task: write a function that takes an array 
// and returns doubles of its element as array 

function makeDouble(inputs)
{
    const outputs = [];
    for(input of inputs)
    {
        const output = input*2;
        outputs.push(output);
    }
    return outputs;
}
let arr = [10,20,30,40,50];
console.log(makeDouble(arr));

// now we can do this task simply by using map.
// map(): performs operation on each element of an array and
// returns a new array
let output = arr.map(x =>x*2);
console.log(output);