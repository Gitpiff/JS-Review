//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoAndAlert(a, b) {
    return (
        alert(a -b)
    )
}

//subTwoAndAlert(10,7)

//create a function that divides three numbers and console logs the quotient
function divideThreeAndLog(a, b, c) {
    console.log(a / b / c)
}

//divideThreeAndLog(10, 5, 1)

//create a function that multiplies three numbers and returns the product
function multiThreeAndReturn(a, b, c) {
    console.log( a * b * c)
}

//multiThreeAndReturn(3, 5, 2)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(a, b, c){
    console.log((a+b) % c)
}


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hard(a, b, c, d){
    let mul = a * b
    
    if(mul > 100) {
        console.log(mul + c + d)
    } else if(mul < 100) {
        console.log(mul - c - d)
    } else {
        alert((a * b *c) % c)
    }
}

hard(5,4,3,2)
