
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var titleText;

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src","./images/dice" + randomNumber2 + ".png")

if (randomNumber1 === randomNumber2) {
    titleText = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    titleText = "🚩 Play 1 Wins!"
} else {
    titleText = "Player 2 Wins! 🚩"
}


document.querySelector("h1").textContent = titleText;