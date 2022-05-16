//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, health, speed, sepcialMove) {
    this.name = name
    this.health = health
    this.speed = speed
    this.sepcialMove = sepcialMove

    this.throw = function() {
        console.log("Yeeeet")
    }
    this.taunt = function() {
        console.log(`can't handle my ${this.sepcialMove}`)
    }
    this.fatality = function() {
        console.log("you dead")
    }
}


//New Syntax

class MakeFighter{
    constructor(name, health, speed, sepcialMove) {
    this.name = name
    this.health = health
    this.speed = speed
    this.sepcialMove = sepcialMove
    }
    throw() {
        console.log("Yeeeet")
    }
    taunt() {
        console.log(`can't handle my ${this.sepcialMove}`)
    }
    fatality() {
        console.log("you dead")

    }
}

let ryu = new StreetFighter("ryu", 100, 70, "kick")
