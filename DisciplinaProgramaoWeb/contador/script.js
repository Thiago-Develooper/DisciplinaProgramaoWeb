var counter = 0

var counterTitle = document.getElementById('counter-title')

var button = document.getElementById('counter-button')
button.addEventListener('click', buttonClicked)

var buttonRestart = document.getElementById("restart-button")
buttonRestart.addEventListener("click", buttonRestartClicked)




/* FUNCOES */

function buttonClicked() {
    console.log("Button clicked!!")
    self.counter++
    counterTitle.innerText = self.counter
}

function buttonRestartClicked() {
    console.log("Restart clicked 😁😆😅🤣😂🙂🙃🫠")
    self.counter = 0
    counterTitle.innerText = self.counter
}