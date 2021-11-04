const imgFrame = $(".img-frame-container");

// get from local storage
function getFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem("object-data"));
  return localStorageData === null ? JSON.stringify([]) : localStorageData;
}

const frameBorder = function (localStorageArray) {
  const renderImg = function (each) {
    console.log(each.imageUrl);
    const imgDivHtml = `<div class="frame ">
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
