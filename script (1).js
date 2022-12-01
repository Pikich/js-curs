'use strict';


// let num = 20;

// function show (text) {
//     console.log(text);
//     console.log(num);
// }

// show('hello');
// console.log(num);

// const calc = (a, b) => {
//     console.log(a + b);
//     return a + b;
    
// }

// calc();


// const usdCurs = 28;
// const euroCurs = 44;
// function convert(amount, curr) {
//     console.log(curr * amount);

// }

// convert(500, usdCurs);
// convert(500, euroCurs);


// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// console.log(sayHello('jjjjjj'));



// function returnNeighboringNumbers(num) {
//     return [num -1, num,  num + 1];
// }

// console.log(returnNeighboringNumbers(555)); 



// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }

//   console.log(getMathResult(2, 5)); 


const num = 5.499;
console.log(Math.round(num));