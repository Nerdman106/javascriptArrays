//My solution:
let arr = [5, 2, 1, -10, 8];

function reversed(a, b){
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

arr.sort(reversed);

console.log(arr)

//book solution:
let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

alert( arr1 );