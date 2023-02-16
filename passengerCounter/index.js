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


// let name = "duygu"
// let greeting = "hi my name is "
// let myGreeting = greeting + name
//console.log(myGreeting)

// let point = 4
// let bonus ="10"
// let total = point+ bonus
// console.log(total)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "duygu"
// let greeting = "welcome back"
// welcomeEl.innerText = greeting +" "+ name

//welcomeEl.innerText = welcomeEl.innerText+ "🥰"
// welcomeEl.innerText += "🥰"


let saveEl = document.getElementById("save-el")
let countEl= document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save(){
    // innerText hidden elementleri göstermez 
    // textContent tüm elementleri gösterir
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0  
    count = 0
}
