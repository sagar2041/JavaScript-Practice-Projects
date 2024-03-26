let body = document.querySelector("body");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let btn = document.getElementById("btn")

one.addEventListener("click", () => {
  body.style.backgroundColor = "brown";
});

two.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});

three.addEventListener("click", () => {
  body.style.backgroundColor = "orange";
});

four.addEventListener("click", () => {
  body.style.backgroundColor = "seagreen";
});

btn.addEventListener("click", () => {
  let colorName = prompt("Enter color Name")
  body.style.backgroundColor = `${colorName}`
})