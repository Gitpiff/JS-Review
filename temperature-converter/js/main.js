//Write your pseduo code first!
//Convert from C to F
//Get the temp to convert in this case Celsius
//Create a function that takes that temp as a parameter
//Create a var called res, start it as an empty string
//Code the formula to convert C to F, store the result into the var res
//Return the result

document.querySelector("h1").addEventListener("click", celciusToFarenheit)

function celciusToFarenheit(c) {
//     let f = c * 1.8 + 32

//     console.log(f)
//
    let temp = Number(document.querySelector("input").value)

    temp = temp * 1.8 + 32

    document.querySelector("h2").innerText = temp


}



