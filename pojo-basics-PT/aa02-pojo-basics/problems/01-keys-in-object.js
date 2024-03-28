/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:
 ** write a function that takes in obj
    - iterate through the obj
    - need an array to return
    - populate the array with the keys
 ** return an array with all the keys of an obj

***********************************************************************/

// function keysInObject(obj) {
//     return Object.keys(obj)
// }
function keysInObject(obj) {
    let array = []
    for(let key in obj){
        array.push(key)
    }
    return array
}

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
