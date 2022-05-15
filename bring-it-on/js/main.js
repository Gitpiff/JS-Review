// *Variables*
// Create a variable and console log the value
const num = 7

//console.log(num)

// Create a variable, add 10 to it, and alert the value
let num2 = 10
num2 += 10

//alert(num2)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substract(a, b, c, d) {
    alert( a - b - c - d)
}


// Create a function that divides one number by another and returns the remainder
function divideAndReturnRemainder(a,b) {
    console.log(a % b)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a, b) {
   if(a + b > 50) {
       alert("Jumanji!")
   } else {
       console.log(a + b)
   }
}

//jumanji(10, 10)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(a, b, c) {
    let mul = a * b * c
    if(mul % 3 === 0) {
        alert("Zebra")
    }

}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWordXTimes(word, num) {
    for(let i = 1; i <= num; i ++) {
        console.log(word)
    }
}

loopWordXTimes("whale", 7)
