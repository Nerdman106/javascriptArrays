
//My solution:
let string = "Background-color"

function camelize(str){
    let stringArray = str.split("")
    stringArray.forEach((item, index, array) => {
        if(item == "-"){
            stringArray[index+1] = stringArray[index+1].toUpperCase()
        }
    })

    let result = stringArray.map((item, index, array) => {
        if(item != '-'){
            return item;
        }
    })

    return result.join("")
}

//The book solution:
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }