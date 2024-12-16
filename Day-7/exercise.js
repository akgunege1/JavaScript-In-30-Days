function fullName(firstName,lastName){
    console.log(`${firstName} ${lastName}`)
}


function areaOfATriangle(length,height){
    let AoT = length*height 
    return AoT;
}
console.log(areaOfATriangle(4,5))



function perimeterOfATriangle(length,height){
    let PoT = (length+height)*2 
    return PoT;
}
console.log(perimeterOfATriangle(4,5))



function areaOfCircle(r){
    let ans = Math.PI * Math.pow(r,2);
    return ans;
}

const convertCelsiusToFahreheit = n => (n * 9 / 5) + 32;

console.log(`It is 9 oC outside. ${convertCelsiusToFahreheit(9)} in oF.`)