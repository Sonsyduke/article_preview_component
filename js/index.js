const button = document.querySelector("button");
const social = document.querySelector("#socials");
const triangle = document.querySelector("#triangle-down");

function toggleDiv() {
  social.classList.toggle("socials");
  triangle.classList.toggle("triangle-down");
}
