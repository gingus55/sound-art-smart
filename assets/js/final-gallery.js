// NAVBAR -- mobile menu
const navbarMenu = function () {
  const burgerIcon = $("#burger");
  const navbarMenu = $("#nav-links");

  const isActiveBurgerIcon = function () {
    navbarMenu.toggle("is-active");
  };

  burgerIcon.on("click", isActiveBurgerIcon);
};

// Make function

const galleryContainer = $("#containment-wrapper");
const buttons = $("#background-btn-container");

const buildImages = function (imageArray) {
  imageArray.forEach((element) => {
    const imageBlock = `<div id="${element.objectID}" class="frame animate__animated animate__fadeIn draggable ui-widget-content">
        <img src="${element.imageUrl}" />
      </div>`;
    const target = `#${element.objectID}`;
    galleryContainer.append(imageBlock);
    $(target).draggable({
      containment: "#containment-wrapper",
      scroll: false,
    });
  });
};

// render images from LS
function getFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem("object-data"));
  return localStorageData === null ? JSON.stringify([]) : localStorageData;
}

const backgroundChange = function (event) {
  target = $(event.target);
  if (target.attr("data-type") == "btn") {
    if (target.attr("id") == "wall") {
      galleryContainer.attr("class", "wall");
    } else if (target.attr("id") == "space") {
      galleryContainer.attr("class", "space");
    } else if (target.attr("id") == "beach") {
      galleryContainer.attr("class", "sunset");
    }
  }
};

const onReady = function () {
  // call mobile navbar burger menu
  navbarMenu();

  // get from local storage
  const localData = getFromLocalStorage();
  buildImages(localData);

  buttons.on("click", backgroundChange);
};

$(document).ready(onReady);
