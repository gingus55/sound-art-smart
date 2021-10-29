// Mobile burger menu
const burgerMenu = $("#burger");
const navbarMenu = $("#nav-links");

const activateBurgerMenu = function () {
  navbarMenu.toggle("is-active");
};

$(burgerMenu).click(activateBurgerMenu);
