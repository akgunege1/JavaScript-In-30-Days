const ages = [19, 22, 19, 24, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
console.log(ages);

let teen = ages[0];
let old = ages[ages.length - 1];
console.log(`The most young age in the group is ${teen} and the oldest age is ${old}.`);

let median;
if (ages.length % 2 === 1) {
    let medianIndex = Math.floor(ages.length / 2); 
    median = ages[medianIndex];
    console.log(`The median age is ${median}`);
} else {
    let middle1 = ages[ages.length / 2 - 1];
    let middle2 = ages[ages.length / 2];
    median = (middle1 + middle2) / 2;
    console.log(`The median age is ${median}`);
}

let average;
let k =  ages.length;
let i;
let total = 0;
for (i = 0; i < k; i++) {
 total += ages[i];
  }
  average = total / k;
  console.log(average);
  
  console.log(`The range of ages is between ${teen}-${old} years.`)
