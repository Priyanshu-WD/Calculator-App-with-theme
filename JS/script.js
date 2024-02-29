let inputDisplay = document.querySelector("#result");
let btn = document.querySelectorAll("button");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");

let heroHead = document.querySelectorAll(".themeCount");
let themeText = document.querySelector("#theme");
let mainHeading = document.querySelector("#content");
let panel = document.querySelector("#keypadPanel");
let delKey = document.querySelector("#del");
let resetKey = document.querySelector("#reset");
let equalKey = document.querySelector("#equal");

let string = "";
let arr = Array.from(btn);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "DEL") {
      if (string.length > 0) {
        string = string.substring(0, string.length - 1);
        inputDisplay.value = string;
      }
    } else if (e.target.innerHTML === "RESET") {
      string = "";
      inputDisplay.value = string;
    } else if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
        inputDisplay.value = string;
      } catch {
        inputDisplay.value = "Error";
      }
    } else {
      string += e.target.innerHTML;
      inputDisplay.value = string;
    }
  });
});

one.addEventListener("click", () => {
  let body = document.querySelector("main");
  body.classList.remove("active2");
  body.classList.remove("active3");
  let toggleBtn = document.querySelector("#tggleBTn");
  toggleBtn.style.marginLeft = "0rem";
});

two.addEventListener("click", () => {
  let body = document.querySelector("main");
  body.classList.add("active2");
  body.classList.remove("active3");
  let toggleBtn = document.querySelector("#tggleBTn");
  toggleBtn.style.marginLeft = "1.3rem";
});

three.addEventListener("click", () => {
  let body = document.querySelector("main");
  body.classList.add("active3");
  body.classList.remove("active2");
  let toggleBtn = document.querySelector("#tggleBTn");
  toggleBtn.style.marginLeft = "2.7rem";
});
