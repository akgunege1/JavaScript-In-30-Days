
let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'

console.log(`The quote ${quote} by John Holmes teaches us to help one another. `)



let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same\
 -- with charity you give love, so don't just give money but reach out your hand instead."

 console.log(quote2)

 let str = '10';
let num = 10;

console.log(typeof str === typeof num); 

if (Number(str) === num) {
    console.log('10');
  } else {
    console.log('The values are not equal.');
  }
  

  let practice4 = parseFloat('9.81')
  let num4 = 10
  if(Math.round(practice4)==num4){
    console.log('Equal to 10')
    }
    else{
        practice4 == num4;
        console.log('Value is changed to', num4)
    }


    let practice6 = 'I hope this course is not full of jargon.'
    console.log(practice6.includes('jargon'))

    let rndNum = Math.random() * 100
    let rndNumInt1= Math.floor(rndNum)
    console.log(rndNumInt1)
 

    let randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    console.log(randomNumber);

    let rndNum3 = Math.random() * 255
    let rndNumInt3= Math.floor(rndNum3)
    console.log(rndNumInt3)


    let practice10 = 'JavaScript'
    let rndNum10= Math.floor(Math.random() * practice10.length)
    console.log(practice10[rndNum10])
























/* const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \           // Burda uzun stringleri \ ile yazmayı gösteriyor
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

*/