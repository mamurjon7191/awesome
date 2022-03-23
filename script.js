"use strict";
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let big = document.querySelector(".big");

big.addEventListener("mouseover", function (a) {
  a.preventDefault();
  if (a.target.classList.contains("img1")) {
    img1.style.setProperty("--width1", 80);
    img2.style.setProperty("--width2", 20);
  } else if (a.target.classList.contains("img2")) {
    img1.style.setProperty("--width1", 20);
    img2.style.setProperty("--width2", 80);
  }
});
