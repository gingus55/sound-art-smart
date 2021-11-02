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
// PAGE TARGETS
const container = $("#question-container");
const cardPlacer = $("#placer");

// convert department to an ID for API call
const convertKeywords = function (keywords) {
  const userChoices = [...keywords];
  if (keywords.includes("Egyptian Art")) {
    userChoices[3] = "10";
  } else if (keywords.includes("Greek and Roman Art")) {
    userChoices[3] = "13";
  } else if (keywords.includes("Islamic Art")) {
    userChoices[3] = "14";
  } else if (keywords.includes("Medieval Art")) {
    userChoices[3] = "17";
  } else if (keywords.includes("Modern Art")) {
    userChoices[3] = "21";
  }
  return userChoices;
};

const buildTitle = function (title) {
  return ` 
  <div class="is-flex is-flex-wrap-wrap is-justify-content-space-around" id="placer">

  <div
  class="
    is-size-1
    title
    has-text-centered
    mt-5
    mb-5
    animate__animated animate__backInDown
  "
>
  ${title}
</div></div>`;
};

// build cards
const buildCards = function (cards) {
  cards.forEach((element) => {
    const answerCard = `<div class="paint-card animate__animated animate__zoomIn m-5" id="${element.name}" name="question-card">
      <div class="card-img" id="${element.name}" name="question-card">
        <img
          src=${element.img}
          alt=“"
          id="${element.name}"
          name="question-card"
        />
      </div>
      <div class="card-header-title is-centered is-size-5" id="${element.name}" name="question-card">${element.name}</div>
    </div>`;

    cardPlacer.append(answerCard);
  });

  return cardPlacer;
};

// RENDER QUESTIONS

const renderQuestions = function (questionObj, type) {
  container.empty();
  cardPlacer.empty();
  // render title
  const title = buildTitle(questionObj.question);
  // build cards
  const cards = buildCards(questionObj.cards);
  // append cards
  container.attr("data-type", type);
  container.append(title, cards);
};

let currentQuestionIndex = 0;

const getArrayByType = function (type) {
  const mapper = {
    painting: paintingsArr,
    sculpture: sculpturesArr,
  };

  return mapper[type];
};

// handleClick needs to store keyword and render next question
const handleClick = function (event) {
  const target = event.target;
  if (target.id === "painting") {
    storeKeyword(target.id);
    renderQuestions(paintingsArr[currentQuestionIndex], "painting");
    currentQuestionIndex += 1;
    container.on("click", questionKeyClick);
  } else if (target.id === "sculpture") {
    storeKeyword(target.id);
    renderQuestions(sculpturesArr[currentQuestionIndex], "sculpture");
    currentQuestionIndex += 1;
    container.on("click", questionKeyClick);
  }

  // RENDER NEXT QUESTION
};

// look at making an API call to generate proposed pieces
const handleResponse = function (response) {
  return response.json();
};

// transform allData object to objectData
const getObjectData = function (allData) {
  const callback = function (each) {
    return {
      title: each.title,
      artist: each.artistDisplayName,
      imageUrl: each.primaryImage,
      date: each.objectDate,
      medium: each.medium,
      culture: each.culture,
      wikiLink: each.objectWikidata_URL,
      objectID: each.objectID,
    };
  };
  console.log(allData);
  return allData.map(callback);
};

const renderObjectResults = function (objectData) {
  container.empty();
  const constructObjectResults = function (each) {
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
    )}">View More Info</a>
    <a class="view-object-btn button" id="save-btn" data-objectId="${JSON.stringify(
      each.objectID
    )}" data-img="${each.imageUrl}" data-title="${
      each.title
    }" data-url="${redirectLink}">Save to favourites</a>
    </div>
  </div>`;
  };
  const objectResultCards = objectData.map(constructObjectResults).join("");
  const objectResultsContainer = `<section id="object-cards-container">${objectResultCards}</section>`;

  container.append(objectResultsContainer);
  // click to view object info page
  container.on("click", handleViewObjectClick);
};

const handleData = async function (response) {
  console.log(response);
  const objArray = response.objectIDs;
  // generate array of 6 objects

  // Shuffle array
  const shuffled = objArray.sort(() => 0.5 - Math.random());

  // Get sub-array of first 6 elements after shuffled
  const objectIds = shuffled.slice(0, 6);
  // fetch data for each of the 6 objects from mock data headings
  console.log(objectIds);

  const getPromise = function (objectId) {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;
    return getDataFromApi(url);
  };

  const promises = objectIds.map(getPromise);
  console.log(promises);

  const allData = await Promise.all(promises);
  console.log(allData);

  const objectData = await getObjectData(allData);
  return objectData;
};

const questionKeyClick = async function (event) {
  const target = $(event.target);
  const currentTarget = $(event.currentTarget);
  const type = currentTarget.attr("data-type");

  if (
    target.is('div[name="question-card"]') ||
    target.is('img[name="question-card"]')
  ) {
    storeKeyword(target.attr("id"));
    if (currentQuestionIndex < 3) {
      renderQuestions(getArrayByType(type)[currentQuestionIndex]);
      currentQuestionIndex += 1;
    } else if (currentQuestionIndex === 3) {
      container.empty();
      container.append(`<p>Getting your results...</p>`);
      const keywords = convertKeywords(keyWords);
      const url = constructSearchUrl(keywords);
      const data = await getDataFromApi(url);
      const objectData = await handleData(data);
      renderObjectResults(objectData);
    }
  }
};

const getDataFromApi = async function (url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const constructSearchUrl = function (keyWords) {
  console.log(keyWords);
  // construct url
  const dept = keyWords[3];
  // console.log(dept);
  const searchWordOne = keyWords[0];
  const searchWordTwo = keyWords[1];
  const searchWordThree = keyWords[2];
  const myUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${dept}&q=${searchWordOne}, ${searchWordTwo}, ${searchWordThree}`;

  return myUrl;
};

const objectIdCardContainer = $("#object-cards-container");

// View Object click handler function
const handleViewObjectClick = function (event) {
  const target = $(event.target);
  // console.log(target);
  if (target.attr("id") == "save-btn") {
    // get data to save in LS
    const favouriteObject = {
      objectID: target.attr("data-objectId"),
      imageUrl: target.attr("data-img"),
      redirectLink: target.attr("data-url"),
      title: target.attr("data-title"),
    };
    const favourites = getFromLocalStorage();
    var index = favourites.findIndex(
      (x) => x.objectID == favouriteObject.objectID
    );
    if (index === -1) {
      favourites.push(favouriteObject);
      localStorage.setItem("object-data", JSON.stringify(favourites));
    }
  }
};

// initialize LS
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

// DOCUMENT ONLOAD
const onReady = function () {
  // call mobile navbar burger menu
  navbarMenu();

  // set local storage
  InitializeLocalStorage();

  // get from local storage
  getFromLocalStorage();

  // NEED WORKING CLICK EVENT
  container.on("click", handleClick);
};

$(document).ready(onReady);
