// object -store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title : "learn css grid for free",
    lessons : 16,
    creator: "duygu",
    lenght: 63,
    level: 2,
    isFree: true,
    tags: ["html" , "css"]
}

console.log(course.lenght)
console.log(course["tags"])
console.log(course.tags)


// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    title : "live like a king in my castle",
    price : 190,
    isSuperhost : true,
    images: ["img/castle.jpg", "img/index.jpeg"]
}

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person= {
    name: "duygu",
    age: 23,
    country: "turkey"   
}
 function logData(){
    console.log(person.name + "is" +person.age + "years old an lives in" + person.country)
 }

 logData()


 let age = 15

 // less than 6 years old -> free
 // 6 to 17 years old     -> child discount
 // 18 to 26 years old    -> student discount
 // 27 to 66 years old    -> full price
 // over 66 years old     -> senior citizen discount
 
 // Create a conditional statement (if/else/else if) that logs out the discount
 // the passenger will get based upon the value of the age variable

 if(age<6){
    console.log("free")
}else if(age <18){
    console.log("child discount")
}else if(age < 27){
    console.log("student discount")
}else if(age < 67){
    console.log("full price")
}else{
    console.log("senior citizen discount")        
}
///************************************* */

let largeCountries1 = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

console.log("The 5 largest countries in the world:")
for (let i = 0; i< largeCountries1.length; i++){
    console.log("-" + largeCountries1[i])
}


////////*/************************************** */
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop()
largeCountries.push("pakistan")
largeCountries.shift()
largeCountries.unshift("china")
console.log(largeCountries)
//////********************************** */

let dayOfMonth = 13
let weekday = "Friday" 

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(dayOfMonth === 13 && weekday === "Friday"){
    console.log("😱")
}
///************************* */
///************************* */
///************************* */
///************************* */

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getHands(){
    let randomIndex = Math.floor(Math.random() * 3 )
    return hands[randomIndex]
}
console.log(getHands() )
///////////****************************** */
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit(){
    for(let i = 0; i<fruit.length; i++){
        if(fruit[i]=== "🍎"){
            appleShelf.textContent += "🍎"
        }else if(fruit[i] === "🍊"){
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()
 