// function saveLead ( ){
//     console.log("tıkklandı")
// }
// inputEl = "duygu"/// const olduğu için değer atayamıyoruz
/////***************************** */
///div container  deneme
// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy</button>"

// function buy(){
//     // container.innerHTML = "<p>thanks dgc dshcb sdvc</p>"
//     container.innerHTML += "<p>thanks dgc dshcb sdvc</p>"

// }
//////////**************************** */

// template strings/literals

 


//////****************************************** */
let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
})


function renderLeads (){
    let listItems= ""
    for (let i= 0; i<myLeads.length; i++){
        // listItems += "<li><a target='_blank' href=' "+ myLeads[i] +" '>"+ myLeads[i]+ "</a></li> "
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                   ${myLeads[i]}
                </a>
            </li> `
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}

