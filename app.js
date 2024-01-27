// let random = Math.floor(Math.random() * 100 + 1);
let random = 10;
let input = document.querySelector(".input");
let check = document.querySelector(".check");
let restart = document.querySelector(".restart");
let paragraf = document.querySelector(".para");
let please = document.querySelector(".please");
let lifepar = document.querySelector(".life");
let life = 7;

const applause = document.querySelector("#applause");
const loser = document.querySelector("#loser");
const down = document.querySelector("#down");
const up = document.querySelector("#up");
const fon = document.querySelector("#fon");

const startBtn = document.querySelector(".start");
const guessGame = function () {
    if (life == 1) {
        if (input.value == random) {
            please.innerHTML = " ";
            lifepar.innerHTML = " ";
            paragraf.innerHTML = "👏 CONGRATULATIONS! 👏";
            check.style.display = "none";
            input.style.display = "none";
            startBtn.style.display = "none";
            restart.style.display = "block";
            applause.play();
        } else {
            paragraf.innerHTML = "😢 Game Over 😢";
            check.style.display = "none";
            input.style.display = "none";
            restart.style.display = "block";
            startBtn.style.display = "none";
            please.innerHTML = "";
            lifepar.innerHTML = "👆👆👆";
            lifepar.style.textShadow = "none";
            life--;
            loser.play();
        }
    } else {
        if (input.value > 100 || input.value < 0 || input.value == "") {
            paragraf.innerText = "Please enter a valid number";
        } else {
            if (input.value > random) {
                paragraf.innerHTML = "Lower number please";
                life--;
                document.querySelector(".last").innerText = input.value;
                down.play();
            } else if (input.value < random) {
                paragraf.innerHTML = "Greater number please";
                life--;
                document.querySelector(".first").innerText = input.value;
                up.play();
            } else if (input.value == random && life == 7) {
                please.innerHTML = " ";
                lifepar.innerHTML = " ";
                paragraf.innerHTML =
                    " ARE YOU A MIND READER? 👏 CONGRATULATIONS! 👏";
                check.style.display = "none";
                input.style.display = "none";
                restart.style.display = "block";
                startBtn.style.display = "none";
                applause.play();
            } else if (input.value == random) {
                please.innerHTML = " ";
                lifepar.innerHTML = " ";
                paragraf.innerHTML = "👏 CONGRATULATIONS! 👏";
                check.style.display = "none";
                input.style.display = "none";
                restart.style.display = "block";
                startBtn.style.display = "none";
                applause.play();
            }
        }
    }

    document.querySelector(".life-span").innerHTML = life;
    input.value = "";
};
check.addEventListener("click", guessGame);

//? Basilan tus Enter ise
input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        guessGame();
    }

    //* 2.yol

    // if (e.code === 'Enter') {
    //   guessGame();
    // }
});

startBtn.addEventListener("click", () => {
    fon.play();
    input.focus();
});

// window.onload = () => {
//   input.focus();
// };
