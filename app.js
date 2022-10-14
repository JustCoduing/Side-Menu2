let toggleBtn = document.querySelector(".toggle")
let body = document.querySelector("body")
let modeIcon = document.querySelector("#mode")
let modePara = document.querySelector(".theme-para")


toggleBtn.addEventListener("click",handleToggle)




function handleToggle()
{
    toggleBtn.classList.toggle("active")
    body.classList.toggle("theme")
    modeIcon.classList.toggle("fa-moon")
    if(body.classList.contains("theme"))
    {
        modePara.textContent="Dark Mode"
    }
    else modePara.textContent="Light Mode"
   
}



let switchBtn = document.querySelector("#switch")
let sideBar = document.querySelector(".sidebar")

switchBtn.addEventListener("click",handleSideBar)


function handleSideBar()
{
    
    sideBar.classList.toggle("change")
    switchBtn.classList.toggle("fa-x")
}