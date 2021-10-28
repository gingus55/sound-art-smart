// Mobile burger menu
// ISSUE?: nav menu doesn't return in larger vp if mobile burger menu is closed
const burgerMenu = $("#burger");
const navbarMenu = $("#nav-links");

const activateBurgerMenu = function () {
  //   if navbar menu is active, deactivate
  //   if (navbarMenu.className === "is-active") {
  //     navbarMenu.className = "inactive";
  //     // else activate navbar menu
  //   } else {
  navbarMenu.toggle("is-active");
  //   }
};

$(burgerMenu).click(activateBurgerMenu);
