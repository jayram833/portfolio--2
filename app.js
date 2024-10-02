"use strict";

const checkbox = document.getElementById("checkbox");

const sun = document.getElementById("sun");
let isDarkMode = false;

checkbox.addEventListener("change", () => {
  if (isDarkMode) {
    // Switching to light mode
    document.body.classList.remove("dark-mode");
    sun.classList.remove("sunset");
    sun.classList.add("sunrise");
  } else {
    // Switching to dark mode
    document.body.classList.add("dark-mode");
    sun.classList.remove("sunrise");
    sun.classList.add("sunset");
  }

  isDarkMode = !isDarkMode;
});
