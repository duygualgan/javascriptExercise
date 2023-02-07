// document.getElementById("count-el").innerText = 6


// let first = 5
// let second = 7
// let count = first + second
// console.log(count)

// let myAge = 24
// console.log(myAge)

// let myAge = 24
// let humanDogRatio =  7

// let myDogAge = humanDogRatio * myAge
// console.log(myDogAge)

// let bonusPoint = 50
// console.log(bonusPoint)
// bonusPoint= bonusPoint + 50
// console.log(bonusPoint)
// bonusPoint =bonusPoint - 75
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)



// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// function myLogger(){
//     console.log(24)
// }
// myLogger()

// let lap1=34
// let lap2=33
// let lap3=36
// function logLapTime(){
//     let totalTime= lap1+lap2+lap3
//     console.log(totalTime)
// }
// logLapTime()

// let lapsComp = 0
// function incrementLap(){
//     lapsComp = lapsComp+1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsComp)


let countEl=document.getElementById("count-el")
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}

function save(){
    console.log(count)
}
