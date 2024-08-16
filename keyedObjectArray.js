// function groupById(data){
//     return data.reduce(item, array => {array[[item.id]: {id: item.id, name: item.name, age: item.age}}], array)
// }

function groupById(data){
    return data.reduce((newObject, item) => {newObject[item.id] = item; return newObject;}, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  


let usersById = groupById(users);

console.log(usersById)