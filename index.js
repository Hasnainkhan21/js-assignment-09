//table
var number = +prompt("Enter a number")
for (let i = 1; i<= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`)
}

//  SUM OF ARRAY     
 var array = []
for (let i = 0; i < 5; i++) {
    var number = +prompt("Enter a number");
    array.push(number)
}
var sum = 0 ;
for (let i = 0; i < array.length; i++) {
     sum = sum + array[i];
}
console.log("the sum of array is " , sum); 


//   SUB SE BARA NUMBER
var array = []
for (let i = 0; i < 5; i++) {
    var number = +prompt("Enter a number");
    array.push(number)
}
var largest = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log("the largest number is ",largest);

//  reverse string
var testString = 'Hasnain'
var reversString = ''
for (var i = testString.length - 1; i >= 0; i--) {
    console.log({ character: testString[i] })
}

//  FACTORIAL
var number = +prompt("enter a number")
var factorial = 1
for (var i = number; i >= 2; i--) {
    factorial = factorial * i;
    }
    console.log({factorial})


