let falsy1 = null
let falsy2
let falsy3 = 0

let truthy1 = 3
let truthy2 = 'Ege'
let truthy3 = true

const check = 4 > 3 && 10 < 12
console.log(4 > 3 && 10 < 12)

const check2 = !(false)
console.log(!(false));


let myAge = 250
let yourAge = 25
console.log(`I am ${myAge-yourAge} years older than you.`)


let myBirth = 2004;
const now = new Date();
console.log(`I am ${now.getFullYear() - myBirth} years old.`)
if(now.getFullYear()-myBirth>=18){
    console.log('I can drive a car.')
}
else{
    console.log('My age is not enough to drive a car.')
}