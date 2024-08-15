//My solution:
let arr = [5,3,8,1]

let filtered = filterRange(arr, 1, 4)

function filterRange(arr, a, b){
    let newArray = arr.filter(element => {
        if(element >= a && element <= b){
            return element
        }
    });
    return newArray
}


console.log(filtered)

//Book solution:
function filterRange(arr1, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
let arr1 = [5, 3, 8, 1];

let filtered1 = filterRange(arr, 1, 4);

alert( filtered1 ); // 3,1 (matching values)

alert( arr1 ); // 5,3,8,1 (not modified)