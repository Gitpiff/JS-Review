//--- Easy
//create a variable and assign it a number
let num = 70

//minus 10 from that number
// let numMinus10 = num - 10 // This solution is valid, just not ideal
num -= 10 // This solution is much better

//print that number to the console
console.log(num)


//--- Medium
//create a variable that holds a value from the input
//wrap the value in a Number() method to make sure that what we are getting is a number
//let initInput = Number(document.querySelector("#danceDanceRevolution").value)

//add 25 to that number
//initInput += 25

//alert that number
//alert(initInput)


//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector("h1")

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener("click", sumOfValues)

function sumOfValues() {
    let initInput = Number(document.querySelector("#danceDanceRevolution").value)
    initInput += 25
    console.log(num + initInput)
}
