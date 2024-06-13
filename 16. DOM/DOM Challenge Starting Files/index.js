document.query;
// Solution
let third = document.querySelector("ul").lastElementChild;
third.innerHTML = "Muhammadamin";

document.querySelector("h1").classList.add("huge");

document.querySelector("button").style.backgroundColor = "green";

document.querySelector("a").getAttribute("href");

document.querySelector("a").setAttribute("href", "https://www.bing.com");

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();

    this.style.color = "green";
  });
}


addEventListener("keypress", function () {
  alert("Key was pressed!");
});
