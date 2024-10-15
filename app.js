"use strict";

const checkbox = document.getElementById("checkbox");

const sun = document.getElementById("sun");
let isDarkMode = false;

checkbox.addEventListener("change", () => {
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
  }

  isDarkMode = !isDarkMode;
});
