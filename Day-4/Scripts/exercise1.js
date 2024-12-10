let age = prompt('Enter your age.')
const now = new Date()
if(age >= 18){
    console.log('You are old enough to drive a car')
}
else{
let yearsLeft = 18 - age;
console.log(`You are left with ${yearsLeft} years to drive.`)
}