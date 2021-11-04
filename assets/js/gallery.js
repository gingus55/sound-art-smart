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

const galleryContainer = $("#containment-wrapper");

const buildImages = function (imageArray) {
  imageArray.forEach((element) => {
    const imageBlock = `<div id="${element.objectID}" class="draggable ui-widget-content">
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

// const dragTarget = [];

// const buildDragTarget = function (imageArray) {
//   imageArray.forEach((element) => {
//     dragTarget.push(`#${element.objectID}`);
//   });
//   console.log(dragTarget);
//   return dragTarget;
// };

// render images from LS
function getFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem("object-data"));
  return localStorageData === null ? JSON.stringify([]) : localStorageData;
}

const onReady = function () {
  // call mobile navbar burger menu
  navbarMenu();

  // get from local storage
  const localData = getFromLocalStorage();
  buildImages(localData);

  // buildDragTarget(localData);

  // NEED WORKING CLICK EVENT
  //   container.on("click", handleClick);
};

$(document).ready(onReady);

// target = JSON.stringify(dragTarget);
// console.log(target);
