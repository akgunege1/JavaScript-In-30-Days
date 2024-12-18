const rectangle = {
    length: 20,
    width: 20,

    getFullData: function(){
        return `${this.length}${this.width}`
    }
}

console.log(rectangle);

console.log(rectangle.length);
//This is another way of getting value, Using [] brackets.
console.log(rectangle['length']);

//You can add new key for an object .
rectangle.sharpness = 2;
rectangle.color = 'Red';

console.log(rectangle)

//Object.assign: To copy an object without modifying the original object

const rectangle2 = Object.assign({}, rectangle)
console.log(rectangle2);


//To get the keys or properties of an object as an array
const keys = Object.keys(rectangle2)
console.log(keys);

//Object.values:To get values of an object as an array
const values = Object.values(rectangle2)
console.log(values)

//Object.entries:To get the keys and values in an array
const entries = Object.entries(rectangle2)
console.log(entries)

//hasOwnProperty: To check if a specific key or property exist in an object
console.log(rectangle2.hasOwnProperty('name'))
console.log(rectangle2.hasOwnProperty('score'))
