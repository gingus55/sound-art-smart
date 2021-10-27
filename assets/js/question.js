// NAVBAR -- mobile menu
const navbarMenu = function () {
  const burgerIcon = $("#burger");
  const navbarMenu = $("#nav-links");

  const isActiveBurgerIcon = function () {
    navbarMenu.toggle("is-active");
  };

  burgerIcon.on("click", isActiveBurgerIcon);
};
// ARRAYS FOR PAINTINGS AND SCULPTURES

// CODE FOR QUESTION LOGIC
const container = $("#question-container");

// document on load
const onReady = function () {
  navbarMenu();
};

$(document).ready(onReady);
