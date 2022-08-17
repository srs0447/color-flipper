const colors = ["red", "lime", "lightgray", "pink", "aqua", "blue"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let col = colors[getRandomNumber()]
    color.textContent = col
    document.body.style.backgroundColor = col
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}




