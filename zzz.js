const navbarMenu = function () {
  const burgerIcon = $("#burger");
  const navbarMenu = $("#nav-links");

  const isActiveBurgerIcon = function () {
    navbarMenu.toggle("is-active");
  };

  burgerIcon.on("click", isActiveBurgerIcon);
};

// call mobile navbar burger menu
navbarMenu();

const imgFrame = $(".img-frame-container");

// get from local storage
function getFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem("object-data"));
  return localStorageData === null ? JSON.stringify([]) : localStorageData;
}

const frameBorder = function (localStorageArray) {
  const renderImg = function (each) {
    console.log(each.imageUrl);
    const imgDivHtml = `<div class="frame animate__animated animate__fadeIn">
        <img
        src="${each.imageUrl}"
        alt="${each.title}"
        />
    </div>`;

    return imgFrame.append(imgDivHtml);
  };

  localStorageArray.forEach(renderImg);
};

frameBorder(getFromLocalStorage());
