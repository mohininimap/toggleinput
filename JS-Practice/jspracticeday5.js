// findout landscape
// function isLandscape(width,height){
// return (width>height)
// }

// console.log(isLandscape(800,600))

// =====================================
// fizzBuzz program
// 1-Divisible by 3 => Fizz
// 2-Divisible by 5 => Buzz
// 3-Divisible by both 3 and 5 =>FizzBuzz
// 4-Not divisible by 3 or 5 =>input
// 5-Not a number=>Not  a number

// function fizzBuzz(number){
//     if(number%3===0 && number%5===0)
//         return "FizzBuzz"

//     if(typeof number !=='number')
//     return 'Not a number'

//     if(number%3===0)
//         return "Fizz"
    

//     if(number%5===0)
//         return "Buzz"
    
//  return number;
    
    

// }

// console.log(fizzBuzz(7))

// ====================================

// Demirit Points
//Spped limit = 70
//5 ->1point
//Math.floor(1.3) =>1
//12 points ->suspended

function checkSpeed(speed){
    const speedLimit=70;
    const KmPerPoint=5;
if(speed<speedLimit)
console.log('Ok')
else{
   let points=Math.floor((speed-speedLimit)/KmPerPoint);

   if(points>=12)
   console.log('License suspended');
   else{
   let points=Math.floor((speed-speedLimit)/KmPerPoint);
   console.log('Points',points);
   }
}
}

checkSpeed(85);