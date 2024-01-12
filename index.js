let checkbtn = document.querySelector("#check");
let textbox = document.querySelector("#password");
let output = document.querySelector("#output");

const letters = "abcdefghijklmnopqrstuvwxyz";
const nums = "1234567890";
const specialChars = "!@#$%^&*()_+={}[]/><,.;:?`~'";

checkbtn.addEventListener("click", () => {
  let password = textbox.value;
  textbox.value = "";
  let result = checkStrenght(password);
  output.innerText = `Your password, ${password} is ${result}.`;
  console.log(password);
});

function containsLetter(password) {
  let i = 0;
  let j = 0;
  for (alpha in letters) {
    if (alpha in password) {
      i++;
    } else if (alpha.toUpperCase() in password) {
      j++;
    }
  }
  return [i, j];
}

function checkStrenght(password) {
  if (password) {
    if (password.length <= 4) {
      let alpha = containsLetter(password);
      console.log(alpha[0], alpha[1]);
      return "weak";
    }
  }
}
