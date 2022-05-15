//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function arrayOfEven(arr) {

        let evenNums = []

         //forEach
        arr.forEach( element => {
            if(element % 2 === 0) {
                evenNums.push(element)
            }
        })

        return evenNums


        //For loop
    // for(let i = 1; i <= arr.length; i ++) {
    //     if(i % 2 === 0) {
    //         evenNums.push(i)
    //     }
    // }

    // console.log(evenNums)
}


//arrayOfEven([1,2,3,4,5,6,7,8,9,10])

console.log(arrayOfEven([1,2,3,4,5,6,7,8,9,10]))
