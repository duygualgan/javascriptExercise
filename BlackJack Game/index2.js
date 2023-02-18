// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

//let age = 20

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// if (age< 21){
//     console.log("giremezsin")
// }
// else{
//     console.log("welcome")
// }


////********************************************** */

// Check if the person is elegible for a birthday card from the King! (100)

//let age = 180

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
// if (age < 100){
//     console.log("not elegible")
// }else if(age === 100){
//     console.log("here is your birthday card from the king")
// }else{
//     console.log("notelegible , you have already gotten one")
// }



///*********************//************************* */ */
let cardss = [7,4]
cardss.push(6)
console.log(cardss)
cardss.pop()
console.log(cardss)

//*************************************** */

// count to ten

// we neeed to specify

// where shoul we start CountQueuingStrategywhere is the finish line 
// what is the step size we should use

//     start        finish       step size
for ( let count = 1; count < 11; count +=1 ){
    console.log(count)
}

let sentence = ["hello", "my", "name", "is", "duygu"]
let greetingEl= document.getElementById("greeting-el")


for(let i = 0; i< sentence.length; i++){
    greetingEl.textContent += sentence[i]+ " "
}


//*********************** */

let player1time = 102
let player2time = 107
function getFastestRaceTime(){
    if(player1time<player2time){
        return player1time
    }else if (player2time< player1time){
        return player2time
    }else {
        return player1time
    }
}

// let fasetestRace = getFastestRaceTime()
// console.log(fasetestRace)

function getTotalRaceTime() {
    return player1time + player2time
}
let totaltime= getTotalRaceTime()
console.log(totaltime)


//******************** */
// random number generater

let rondomNumber = Math.random() * 6 
console.log(rondomNumber)
// 0 ile 1 arasında random sayı üretir 1 dahil değil

let flooredNumber = Math.floor(3.45632)

// it removes the desimal

let randomNumbers = Math.floor( Math.random() * 6) +1 

function rollDice(){
    let randomNumbers = Math.floor( Math.random() * 6) +1 
    return randomNumbers
}



///////***************************************** */
///logical operation

let hasCompletedCourse = true
let givesCertificate = true

if ( hasCompletedCourse === true && givesCertificate === true){
    // if(givesCertificate === true){    ||  or operation
    //     generateCertificate()
    // }
    generateCertificate()
}

function generateCertificate(){
    console.log("generating certificate ......")
}