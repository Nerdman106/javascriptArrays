function unique(originalArray) {
    let arr = originalArray.slice()
    for(let i = 0; i < arr.length; i++){
        let doubledStringIndex = arr.indexOf(arr[i], i+1)
        if(doubledStringIndex != -1){
            arr.splice(doubledStringIndex, 1);
            i--;
        }
    }
    return arr;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"];


console.log(unique(strings))