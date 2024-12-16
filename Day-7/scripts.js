function printID(){
    let firstName = prompt('Adınızı giriniz.','Adınız Cemil Olabilir mi ?' );
    let surName = prompt('Soyadınızı girin.');
    let age = prompt('Yaşınızı girin');
    let birthYear = prompt('Lütfen doğduğunuz yılı girin.');
    let location = prompt('Yaşadığınız şehri girin.');
console.log(firstName, surName, age, birthYear, location)
}

/*
function square(number) {
  return number * number
}
*/

/*
functionName(parm1, parm2) // during calling or invoking two arguments needed
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
*/

function toplama(num1,num2){
    let sum = num1 + num2;
    return sum;
}


            // Arrow Functions

        //   const sumAllNums = (...args) => {
   

    const anonymousFun = function() {
        console.log(            //Anonymous Function.
          'I am an anonymous function and my value is stored in anonymousFun'
        )
      }

      let squaredNum = (function(n) {
        return n * n
      })(10)            //Self Invoking Function.
      
      console.log(squaredNum)
      


      let square = n => {
            return n*n;                 //Arrow Function.
      }
      console.log(square(n));

