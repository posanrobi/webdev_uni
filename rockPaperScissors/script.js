const gameContainer = document.querySelector(".game-container");
const btns = document.querySelectorAll(".btn");
const rockBtn = document.querySelector(".btn-rock");
const scissorsBtn = document.querySelector(".btn-scissors");
const paperBtn = document.querySelector(".btn-paper");
const questionMark = document.querySelector(".question-img");
const resultText = document.querySelector(".result");

let intervalId;
let userChoiceSrc = "";
let computerChoiceSrc = "";

btns.forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(intervalId);
    resultText.textContent = "";
    resultText.classList.remove("win");
    resultText.classList.remove("lose");

    intervalId = setInterval(() => {
      const randomIndex = Math.trunc(Math.random() * 3) + 1;
      questionMark.src = `images/game--${randomIndex}.png`;
    }, 50); 
    
    userChoiceSrc = button.getAttribute("data-image-src"); 
    
    setTimeout(() => {
      clearInterval(intervalId);
      computerChoiceSrc = questionMark.getAttribute("src");

      //game--1 -> scissors
      //game--2 -> paper
      //game--3 -> rock
  
      if (userChoiceSrc === computerChoiceSrc) {
        resultText.textContent = "It's a draw!";
      } else if (
        (userChoiceSrc === "images/game--1.png" && computerChoiceSrc === "images/game--2.png") ||
        (userChoiceSrc === "images/game--2.png" && computerChoiceSrc === "images/game--3.png") ||
        (userChoiceSrc === "images/game--3.png" && computerChoiceSrc === "images/game--1.png")
      ) {
        resultText.textContent = "You won! 🏆";
        resultText.classList.add("win");
      } else {
        resultText.textContent = "You lost! 😒";
        resultText.classList.add("lose");
      }
    }, 2500);
  });
});
