function solveLinEquation(a,b,c, value = null, variable = 'x') {
if(variable === 'x' && value !=null){
    if(a === 0){
        throw new Error('Cannot solve the Equation when a is equal to 0.')
    }
return (-b * value - c) / a;
}
}

console.log(solveLinEquation(4,2,12,7,'x'));


function discriminantCalc(a,b,c){
let D = Math.pow(b,2)-(4*a*c)
return D;
}




function solveQuadEquation(a,b,c, value = null, variable = 'x') {
    const D = Math.pow(b,2)-(4 * a * c)
    
    if(D>0){
            console.log('2 adet reel kökü vardır.')
            const x1 = (-b - Math.sqrt(D)) / (2*a);
            const x2 = (-b + Math.sqrt(D)) / (2*a);
                    return [x1,x2];
        }
    else if(D===0){
            const x = -b / (2 * a);
            return x;
        }
    else{
            console.log('Reel kök bulunmamaktadır.')
        }

}

function showDateTime(){
const now = new Date();
console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`);
}

