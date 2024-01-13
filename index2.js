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
});

async function isPasswordCommon(password) {
  try {
    await fetch("./pass_data.json")
      .then((result) => result.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          let pass = data[i];
          if (password === pass) {
            res = true;
            break;
          } else {
            res = false;
          }
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
    return new Promise((resolve, reject) => {
      resolve(res);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

function contents(password) {
  let content = [0, 0, 0, 0];
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (password[i] === letters[j]) {
        content[0] = 1;
      }
    }
  }
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (password[i] === letters[j].toUpperCase()) {
        content[1] = 1;
      }
    }
  }
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (password[i] === nums[j]) {
        content[2] = 1;
      }
    }
  }
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < specialChars.length; j++) {
      if (password[i] === specialChars[j]) {
        content[3] = 1;
      }
    }
  }
  return content[0] + content[1] + content[2] + content[3];
}

async function checkStrenght(password) {
  try {
    if (password) {
      let common = await isPasswordCommon(password);
      common.then((res) => {
        if (res === true) {
          return "very weak, as it is in the most common password list.";
        } else {
          let content = contents(password);
          if (password.length <= 4) {
            if (content === 1) {
              return "very weak";
            } else if (content === 2) {
              return "weak";
            } else {
              return "medium";
            }
          }
          if (password.length <= 8) {
            if (content === 1) {
              return "weak";
            } else if (content === 2) {
              return "medium";
            } else {
              return "strong";
            }
          }
          if (password.length > 8) {
            if (content === 1) {
              return "medium";
            } else if (content === 2) {
              return "strong";
            } else {
              return "very strong";
            }
          }
        }
      });
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
