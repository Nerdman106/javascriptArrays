//let result = arr.reduce((sum, current) => sum + current, 0);



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function getAverage(arr){
    let result = arr.reduce((sum, item) => sum + item.age, 0)
    return Math.round(result / arr.length)
}

let x = getAverage(arr)


console.log(x)