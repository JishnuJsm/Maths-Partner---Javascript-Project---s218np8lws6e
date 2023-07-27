const searchBtn = document.querySelector(".search-btn")
const input = document.querySelector(".input")
const operation = document.querySelector("#operation")
const savedBtn = document.querySelector(".save-btn")
const currentSolution = document.querySelector(".current-solutions")
const savedSolution = document.querySelector(".solution-tab")
const btn = document.querySelector(".close")

let savedsolution = document.querySelectorAll(".solution-div") 
let deletebtn = document.querySelectorAll(".fa-trash-can")

let expression
let solutions = []

if(localStorage.getItem("solution")){
    solutions = JSON.parse((localStorage.getItem("solution")))
    console.log(solutions)
}

function fetchProblem(){
    expression = encodeURIComponent(input.value)
    let operator = operation.options[operation.selectedIndex].value
    fetch(`https://newton.vercel.app/api/v2/${operator}/${expression}`)
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        solutions.push(result)
        currentSolution.innerHTML = `<div class="solution-div">
                                    <h2>${result.operation} : ${result.expression}</h2>
                                    <div id="solution">${result.result}</div>
                                </div>`
        localStorage.setItem("solution", JSON.stringify(solutions))
    })
}

searchBtn.addEventListener("click",()=>{
    if(input.value != null){
        fetchProblem()
        input.value = ""
    }
    else{
        alert("Please Enter Valid Expression!")
    }
})

function renderUi(){
    if(solutions.length>0){
        solutions.forEach((e)=>{
            let div = document.createElement("div")
            div.classList.add("solution-div")
        
            div.innerHTML = `<h2>${e.operation} : ${e.expression}</h2>
                              <div id="solution">${e.result}</div>
                              <i class="fa-regular fa-trash-can fa-2xl"></i>`
        
            savedSolution.appendChild(div)
        })
        deleteOperation()
    }   
    else{
        let div = document.createElement("div")
        
        div.innerHTML = `<h2 class="result">No Results Found</h2>`
        
        savedSolution.appendChild(div)
    }
}

savedBtn.addEventListener("click",()=>{
    savedSolution.innerHTML = ""
    document.querySelector(".saved-solution").style.display = "block"
    renderUi()
})

function deleteOperation(){
    savedsolution = document.querySelectorAll(".solution-div") 
    deletebtn = document.querySelectorAll(".fa-trash-can")
    console.log(deletebtn)
    if(deletebtn.length){
        for(let i=0; i<deletebtn.length; i++){
            deletebtn[i].addEventListener("click",()=>{
                console.log("Delete Button Clicked at Index"+ i)
                solutions.splice(i, 1)
                if(solutions.length>0){
                    localStorage.setItem("solution", JSON.stringify(solutions))
                }
                else{
                    localStorage.removeItem("solution")
                    document.querySelector(".saved-solution").style.display = "none"
                }
                savedSolution.innerHTML = ""
                renderUi()
            })
        }
    }
}

btn.addEventListener("click",()=>{
    document.querySelector(".saved-solution").style.display = "none"
})

//Form

const title = document.querySelector(".form-title")
const namediv = document.querySelector(".name")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const login = document.querySelector("#login")
const register = document.querySelector("#register")
const submit = document.querySelector("#submit")
const olduser = document.querySelector(".olduser")
const newuser = document.querySelector(".newuser")
const formdiv = document.querySelector(".form-div")
const form = document.querySelector(".form")

register.addEventListener("click", (e)=>{
    e.preventDefault()
    title.innerHTML="SignIn / SignUp"
    namediv.classList.remove("hidden")
    submit.value = "Register"
    olduser.classList.remove("hidden")
    newuser.classList.add("hidden")
    name.value = ""
})

login.addEventListener("click", (e)=>{
    e.preventDefault()
    title.innerHTML="Login"
    namediv.classList.add("hidden")
    submit.value = "Login"
    olduser.classList.add("hidden")
    newuser.classList.remove("hidden")
    name.value = "User"
})

form.addEventListener("submit", ()=>{
    formdiv.style.backgroundColor = "transparent"
    formdiv.innerHTML = `<h2 class="loginstate">Hello ${name.value}, You ${submit.value == "SignIn" ? "Registered" : "Logged in"} Succesfully!</h2>`
    setTimeout(()=>{
        formdiv.classList.add("hidden")
    },2000)
})

