// TODO: ekle bişiler 
// ? buraya bakılıcak

// 2 tip değişken var 
// primative (ilkel) veri tipleri -- 
// Referance /object veri tipleri

// number,string, boolean, bigInt- ile number kullanılmaz,
// symbol, null, undefind

// variable - identifier
//declare-tanımlamak , assigment-eşitlemek bir değişkene 
var test = 45
var test2 = 64
test = "string"
test = true
test=2n
//test= Symbol("test")
// test= null
// typeof
console.log(test)
console.log(typeof test)


var a= "test"
var b = "merhaba dünya"
var c = `${a} ${b}`// arada boşluk için +" "+ yapmaya gerek kalmıyo
console.log(c)
console.log(b.indexOf("a", 5))
console.log(b.lastIndexOf("a", 11))
console.log(b.endsWith("dün", 7))

console.log(b.includes("dün"))
// console.log(a.slice(1,3))// sonuncu 3 dahil olmaz
console.log(b.slice(1))
console.log(b.toUpperCase())
console.log(b.toLowerCase())

var d= "        testt   "
console.log(d.trim())


///********************** */
/// denemelerrr*******/
var e= "ekmek"
var f= "pasta"
var g= "börek"
var son= `${e.slice(0,3)}-${f.slice(0,3)}-${g.slice(0,3)}`
console.log(son.toUpperCase())

///***************** */
var num = "test"
var response 
if(num % 2== 0){
    console.log(response= `${num} bir çift sayı`)
}else if(num % 2== 1){
    console.log(response= `${num} bir tek sayı`)
}
else if (typeof num != "number"){
    response= "lütfen tam sayı giriniz"
}
console.log(response)

var input = 14
var expression = (input % 7 == 0)? 7 : input % 7

var day
// 
 switch (expression) {
    case 1:
        day = "pazartesi"
        break
    case 2:
        day = "salı"
        break
    case 3:
        day = "carsamba"
        break
    case 4:
        day = "perşembe"
        break
    case 5:
        day = "cuma"
        break
    case 6:        
    case 7:
        day = "haftasonu"
        break
    default : 
        day = "lütfen geçerli bir gün giriniz"
 }

 console.log(`${day}`)


 
 var tests = "merhaba dünya nasılsın denemeler falan bişiler"
 var responsetest = tests.split(" ")
 console.log(responsetest)

 ///******************************* */
 // array methodları
 var array1=[1,2,3]
 var array2=[4,5,6]
 var responseArray  = array1.concat(array2)
 console.log(responseArray)
 //************* *
 // sperad syntax
 console.log(...responseArray)

 // join
 var arrayString = ["hello", "world","how","are","you"]
 var responseString = arrayString.join(" ")
 console.log(responseString)

var text = "istanbul trükiyenin en büyük şehridir"
var responseText = text.split(" ")
responseText [0]=`${responseText[0][0].toUpperCase()} ${responseText[0].slice(1)}`
console.log(responseText.join(" ")) 

var ters = [1,2,3,4]
ters.reverse()
console.log(ters)

//pop
var shifts = [1,2,3,4]
shifts.pop()

// shift

shifts.shift()
console.log(shifts)
// push en sona eleman ekleme 
// unshift en başa eleman ekleme

var a1= [1,2,3,4]
var a2= [].concat(a1)//var a2 = a1 dersek bir değişiklik olduğunda ikisinde de değişir bu durumda sadece 1 tanesinde değişir
a2.pop()
console.log(a1)
console.log(a2)