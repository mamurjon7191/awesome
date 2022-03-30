"use strict";
let btn = document.querySelector(".btn");
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let kun = +day.value;
let soat = +hour.value;
let minut = +minute.value;
let second1 = +second.value;

btn.addEventListener("click", function () {
  let kun = +day.value;
  let soat = +hour.value;
  let minut = +minute.value;
  let second1 = +second.value;
  let r = setInterval(function () {
    // kun = +day.value;
    // soat = +hour.value;
    // minut = +minute.value;
    // second1 = +second.value;

    if (second1 <= 60) {
      second.value = second1--;
      if (second1 == -1) {
        second1 = 60;
        minute.value = --minut;
        if (minut == 0) {
          minut = 60;
          hour.value = --soat;
          if (soat == 0) {
            day.value = --kun;
            soat = 24;
          } else if (soat == 0 && minut == 0) {
            soat.value = 0;
          }
        }
      }
    }
    // day.value = Number(kun--);
    // hour.value = Number(soat--);
    // minute.value = Number(minut--);
    // second.value = Number(second1--);
  }, 10);
});
