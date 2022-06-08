// password gen upon a user input
const box = document.querySelector(".box");

const whiteBg = () => {
  box.style.backgroundColor = "blue";
};
const orangeBg = () => {
  box.style.backgroundColor = "red";
};
box.addEventListener("mouseenter", orangeBg);
box.addEventListener("mouseleave", whiteBg);
