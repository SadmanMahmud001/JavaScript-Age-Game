function gameFunction() {
  let input = document.getElementById("input");
  let text = document.getElementById("text");

  let born = document.getElementById("born");
  let child = document.getElementById("child");
  let teenager = document.getElementById("teenager");
  let adult = document.getElementById("adult");
  let old = document.getElementById("old");
  let veryOld = document.getElementById("veryOld");
  let die = document.getElementById("die");

  let bornText = "First born! Then you can play this game.";
  let childText = "You are a child.";
  let teenagerText = "You are a Teenager.";
  let adultText = "You are an Adult.";
  let oldText = "You are Old.";
  let veryOldText = "You are very Old!";
  let aliveText = "There is no chance you are still alive!!";

  document.querySelector("#born .cartText p").innerHTML = bornText;

  document.querySelector("#child .cartText p").innerHTML = childText;

  document.querySelector("#teenager .cartText p").innerHTML = teenagerText;

  document.querySelector("#adult .cartText p").innerHTML = adultText;

  document.querySelector("#old .cartText p").innerHTML = oldText;

  document.querySelector("#veryOld .cartText p").innerHTML = veryOldText;

  document.querySelector("#die .cartText p").innerHTML = aliveText;

  function mainFunction() {
    document.getElementById("submit").addEventListener("click", function () {
      let inputValue = parseInt(input.value);

      if (inputValue === 0) {
        console.log(bornText);
        text.innerHTML = bornText;
        born.style.display = "block";
        child.style.display = "none";
        teenager.style.display = "none";
        adult.style.display = "none";
        old.style.display = "none";
        veryOld.style.display = "none";
        die.style.display = "none";
      } else if (inputValue && inputValue <= 13) {
        console.log(childText);
        text.innerHTML = childText;
        born.style.display = "none";
        child.style.display = "block";
        teenager.style.display = "none";
        adult.style.display = "none";
        old.style.display = "none";
        veryOld.style.display = "none";
        die.style.display = "none";
      } else if (inputValue && inputValue <= 18) {
        console.log(teenagerText);
        text.innerHTML = teenagerText;
        born.style.display = "none";
        child.style.display = "none";
        teenager.style.display = "block";
        adult.style.display = "none";
        old.style.display = "none";
        veryOld.style.display = "none";
        die.style.display = "none";
      } else if (inputValue && inputValue <= 30) {
        console.log(adultText);
        text.innerHTML = adultText;
        born.style.display = "none";
        child.style.display = "none";
        teenager.style.display = "none";
        adult.style.display = "block";
        old.style.display = "none";
        veryOld.style.display = "none";
        die.style.display = "none";
      } else if (inputValue && inputValue <= 70) {
        console.log(oldText);
        text.innerHTML = oldText;
        born.style.display = "none";
        child.style.display = "none";
        teenager.style.display = "none";
        adult.style.display = "none";
        old.style.display = "block";
        veryOld.style.display = "none";
        die.style.display = "none";
      } else if (inputValue && inputValue <= 100) {
        console.log(veryOldText);
        text.innerHTML = veryOldText;
        born.style.display = "none";
        child.style.display = "none";
        teenager.style.display = "none";
        adult.style.display = "none";
        old.style.display = "none";
        veryOld.style.display = "block";
        die.style.display = "none";
      } else if (inputValue && inputValue <= 1000) {
        console.log(aliveText);
        text.innerHTML = aliveText;
        born.style.display = "none";
        child.style.display = "none";
        teenager.style.display = "none";
        adult.style.display = "none";
        old.style.display = "none";
        veryOld.style.display = "none";
        die.style.display = "block";
      } else if (inputValue && inputValue >= 1001) {
        alert(
          `${inputValue} The Number is to long. And there is no chance you are still alive!`
        );
      } else {
        alert("Enter your age.");
      }

      // reload.style.display = "block";
    });
  }
  mainFunction();
}
gameFunction();
