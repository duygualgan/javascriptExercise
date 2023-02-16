// let firstName = "duygu"
// let lastName ="algan"
// let fullName = firstName + " " + lastName
// console.log(fullName)

// ////////////////////////////
// let name ="duygu"
// let greeting = "hi there"
// //create a function that logout "hi there, duygu!" when called
// function greetingDuygu (){
//     console.log(greeting + ", " + name + "!")
// }
// greetingDuygu()


// /////////////////////
// let myPoint = 3
// //create 2 function add3Point() and remove1Point 
// //and have them
// //add/remove points to/from the myPoints variable
 
// function add3Point(){
//     myPoint += 3
// }

// function remove1Point(){
//     myPoint-= 1
// }
// add3Point()
// add3Point()
// add3Point()
// add3Point()
// remove1Point()
// remove1Point()
// remove1Point() 

// console.log(myPoint)


// /////////////////////
// console.log("2"+ 2)//22
// console.log(11 +7)//18
// console.log("my point :" +5 +9) //my point : 59
// console.log("11" + "12")//1112



// **************************************** */
// rendering an error message
// when the user clicks the purchase button, render out
// "something went wrong, please try again" in the paragraph
// that has the id = "error"


// let errorMesagge = document.getElementById("error")
// console.log(errorMesagge)

// function purchase(){
//     console.log("tıklandı")
//     errorMesagge.textContent= "something went wrong, please try again"
// }

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2 

//create 4 funcion
// call the correct function when thw user clicks on one of the button
//perform the given calculation using num1,num2
//render the result of the calculation in the paragraph with id"sum-el"

let sumEl = document.getElementById("sum-el")

function add(){
    sumEl.textContent += num1+ num2
}
function subtract(){
    sumEl.textContent += num1 - num2  
}
function divide(){
    sumEl.textContent += num1/num2
}
function multiply(){
    sumEl.textContent += num1*num2
}