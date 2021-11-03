console.log("howdy planet");

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

$("#draggable3").draggable({
  containment: "#containment-wrapper",
  scroll: false,
});

const galleryContainer = $("#containment-wrapper");

const buildImages = function (imageArray) {
  imageArray.array.forEach((element) => {
    const imageBlock = `<div id=${element.objectID} class="draggable ui-widget-content">
        <img src="${element.imageUrl}" />
      </div>`;
    galleryContainer.append(imageBlock);
  });
};

// render images from LS
function getFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem("object-data"));
  return localStorageData === null ? JSON.stringify([]) : localStorageData;
}

const onReady = function () {
  // call mobile navbar burger menu
  navbarMenu();

  // set local storage
  //   InitializeLocalStorage();

  // get from local storage
  const localData = getFromLocalStorage();
  buildImages(localData);

  // NEED WORKING CLICK EVENT
  //   container.on("click", handleClick);
};

$(document).ready(onReady);
