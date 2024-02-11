let hEl = document.getElementById("h-el")
let buttonEL = document.getElementById("button-el")
let bodyColor = document.querySelector("body")
console.log(buttonEL, hEl)


buttonEL.addEventListener("click", function() {
    bodyColor.style.backgroundColor = colorGen()
    hEl.textContent = "Background Color : " + colorGen()
})




function colorGen() {
    let rendOne = Math.floor(Math.random() * 256)
    let rendTwo = Math.floor(Math.random() * 256)
    let rendTree = Math.floor(Math.random() * 256)
    let final = `rgb(${rendOne},${rendTwo},${rendTree})`
    return final
}