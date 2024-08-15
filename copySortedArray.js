let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array){
    let newArray = array.map(item => {return item}).sort()
    return newArray

}



let sorted = copySorted(arr);

console.log(arr)
console.log(sorted)