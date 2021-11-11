// NAVBAR -- mobile menu

const navbarMenu = function () {
  const burgerIcon = $("#burger");
  const navbarMenu = $("#nav-links");

  const isActiveBurgerIcon = function () {
    navbarMenu.toggle("is-active");
  };

  burgerIcon.on("click", isActiveBurgerIcon);
};

function InitializeLocalStorage() {
  const objectInfo = JSON.parse(localStorage.getItem("object-data"));
  if (!objectInfo) {
    return localStorage.setItem("object-data", JSON.stringify([]));
  }
}

function getFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem("object-data"));
  return localStorageData === null ? JSON.stringify([]) : localStorageData;
}

const favouriteContainer = $("#favourite-container");
const resetContainer = $("#btn-container");

const renderFavouriteCards = function (lsdata) {
  favouriteContainer.empty();
  const constructFavouriteCards = function (each) {
    const redirectLink = `./view-object-results.html?objectid=${each.objectID}`;
    return `<div id="object-id-card-container" class="object-card animate__animated animate__zoomIn m-5">
      <div class="card-img">
        <img src="${each.imageUrl}" alt="" />
      </div>
      <div class="card-header-title has-text-centered is-size-5 is-italic">
        ${each.title}
      </div>
      <div class="view-btn-container">
        <a href=${redirectLink} class="view-object-btn button" id="${JSON.stringify(
      each.objectID
    )}">View again...</a>
    </div>
    </div>`;
  };
  const favouriteCards = lsdata.map(constructFavouriteCards).join("");
  const favouriteCardContainer = `<section id="object-cards-container">${favouriteCards}</section>`;

  favouriteContainer.append(favouriteCardContainer);
};

const emptyLocalStorage = function () {
  localStorage.setItem("object-data", JSON.stringify([]));
};

const handleReset = function (event) {
  const target = $(event.target);
  if (target.attr("id") == "reset-btn") {
    favouriteContainer.empty();
    emptyLocalStorage();
  }
};

const onReady = function () {
  // call mobile navbar burger menu
  navbarMenu();

  const lsdata = getFromLocalStorage();

  renderFavouriteCards(lsdata);

  resetContainer.on("click", handleReset);
};

$(document).ready(onReady);
