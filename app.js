let random = Math.floor(Math.random() * 1000 + 1);
let input = document.querySelector(".input");
let check = document.querySelector(".check");
let restart = document.querySelector(".restart");
let paragraf = document.querySelector(".para");
let please = document.querySelector(".please");
let lifepar = document.querySelector(".life");
let life = 10;

const guessGame = function () {
  if (life == 1) {
    if (input.value == random) {
      paragraf.innerHTML = "👏 CONGRATULATIONS! 👏";
      check.style.display = "none";
      input.style.display = "none";
      restart.style.display = "block";
      // applause.play();
    } else {
      paragraf.innerHTML = "😢 Game Over 😢";
      check.style.display = "none";
      input.style.display = "none";
      restart.style.display = "block";
      please.innerHTML = "";
      lifepar.innerHTML = "👆👆👆";
      lifepar.style.textShadow = "none";
      life--;
      // loser.play();
    }
  } else {
    if (input.value > 1000 || input.value < 0 || input.value == "") {
      paragraf.innerText = "Please enter a valid number";
    } else {
      if (input.value > random) {
        paragraf.innerHTML = "Lower number please";
        life--;
        document.querySelector(".last").innerText = input.value;
        // down.play();
      } else if (input.value < random) {
        paragraf.innerHTML = "Greater number please";
        life--;
        document.querySelector(".first").innerText = input.value;
        // up.play();
      } else if (input.value == random) {
        paragraf.innerHTML = "👏 CONGRATULATIONS! 👏";
        check.style.display = "none";
        input.style.display = "none";
        restart.style.display = "block";
        // applause.play();
      }
    }
    
  }

  document.querySelector(".life-span").innerHTML = life;
  input.value = "";
}
  check.addEventListener("click", guessGame);

  input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
   
    guessGame();
  }

  });


window.onload = () => {
  fon.play();
  input.focus();
};

