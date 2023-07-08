const searchbtn = document.querySelector(".search-btn")
const input = document.querySelector(".input")
const operation = document.querySelector("#operation")
const savedbtn = document.querySelector(".save-btn")
const solutiontab = document.querySelector(".saved-solutions")
let savedsolution = document.querySelectorAll(".solution-div") 
let deletebtn = document.querySelectorAll(".fa-trash-can")

let expression;
let solutions = []
if(localStorage.getItem("solution")){
    solutions = JSON.parse((localStorage.getItem("solution")))
}

function fetchproblem(){
    expression = encodeURIComponent(input.value)
    let operator = operation.options[operation.selectedIndex].value
    fetch(`https://newton.vercel.app/api/v2/${operator}/${expression}`)
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        solutions.push(result)
        solutiontab.innerHTML = `<div class="solution-div">
                                    <h2>${result.operation} : ${result.expression}</h2>
                                    <div id="solution">${result.result}</div>
                                </div>`
        localStorage.setItem("solution", JSON.stringify(solutions))
    })
}

searchbtn.addEventListener("click", ()=>{
    if(input.value != ""){
        fetchproblem()
    }
    else{
        alert("Please Enter Valid Expression!")
    }
})

function renderUi(){
    solutions.forEach((e)=>{
        let div = document.createElement("div")
        div.classList.add("solution-div")
    
        div.innerHTML = `<h2>${e.operation} : ${e.expression}</h2>
                          <div id="solution">${e.result}</div>
                          <i class="fa-regular fa-trash-can fa-2xl"></i>`
    
        solutiontab.appendChild(div)
    })
    savedsolution = document.querySelectorAll(".solution-div") 
    deletebtn = document.querySelectorAll(".fa-trash-can")
}
savedbtn.addEventListener("click", ()=>{
 solutiontab.innerHTML = ""
    renderUi()
    for(let i=0; i<deletebtn.length; i++){
        deletebtn[i].addEventListener("click", ()=>{
            solutions.splice(i, i+1)
            if(solutions.length>0){
                localStorage.setItem("solution", JSON.stringify(solutions))
            }
            else{
                localStorage.removeItem("solution")
            }
            solutiontab.innerHTML = ""
            renderUi()
        })
     }
})
