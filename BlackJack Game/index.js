// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

let firstCard = 10
let secondCard = 4
let cards = [firstCard,secondCard]
// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard
let hasBlackJack = false
//console.log(sum)
let isAlive = true
let message = ""
let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let messageEl = document.getElementById("message-el")
console.log(messageEl)


function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " +cards[0] +" " + cards[1]
    sumEl.textContent = "sum: " + sum
    if( sum <= 20){
        message = "do you want to draw a new card?"
    } else if (sum === 21){
        message = "wohoo! you have got BlackJack!"
        hasBlackJack = true
    }
    else {
        message = "you are out of the game!!!"
        isAlive = false
    } 

    messageEl.textContent  = message
}
function newCard(){
     let card = 7
     sum += card
     renderGame()
}



// console.log(isAlive)
// console.log(hasBlackJack)
console.log(message)

//*******************************/*//////
