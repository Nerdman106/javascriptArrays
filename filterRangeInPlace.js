let arr = [5, 3, 8, 1];



function filterRangeInPlace(array, a, b){
    for (let i =0; i < array.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1)
            i--;
        }
    }
}

filterRangeInPlace(arr, 1, 4);

console.log(arr)