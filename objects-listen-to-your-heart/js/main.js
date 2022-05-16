//Create a stopwatch object that has two properties and three methods
//this code is not DRY, if we needed to create more objects we'd need to retype everything
let stopwatch = {}

stopwatch.brand = "casio"
stopwatch.shape = "round"

stopwatch.start = function() {
    console.log("Run!")
}
stopwatch.stop = function() {
    console.log("Stop!")
}
stopwatch.alarm = function() {
    console.log("Beep!")
}
