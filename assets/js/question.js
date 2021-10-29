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
const paintingsArr = [
  {
    question: "Which do you prefer?",
    cards: [
      {
        name: "People",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Places",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Animals",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
  {
    question: "Which medium do you like the look of?",
    cards: [
      {
        name: "Oil",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Watercolour",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Tempera",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
  {
    question: "Which style do you fancy?",
    cards: [
      {
        name: "Egyptian Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "10",
      },
      {
        name: "Greek and Roman Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "13",
      },
      {
        name: "Islamic Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "14",
      },
      {
        name: "Medieval Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "17",
      },
      {
        name: "Modern Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "21",
      },
    ],
  },
];

const sculpturesArr = [
  {
    question: "Which do you prefer?",
    cards: [
      {
        name: "People",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Places",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Animals",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
  {
    question: "Which medium do you like the look of?",
    cards: [
      {
        name: "Clay",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Marble",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Metal",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Gold",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
  {
    question: "Which style do you fancy?",
    cards: [
      {
        name: "Egyptian Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "10",
      },
      {
        name: "Greek and Roman Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "13",
      },
      {
        name: "Islamic Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "14",
      },
      {
        name: "Medieval Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "17",
      },
      {
        name: "Modern Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "21",
      },
    ],
  },
];

// CODE FOR QUESTION LOGIC
// PAGE TARGETS
const container = $("#question-container");
const cardPlacer = $("#placer");

// EMPTY ARRAY FOR KEYWORD STORAGE
const keyWords = [];

const storeKeyword = function (word) {
  keyWords.push(word);
  console.log(keyWords);
};

// convert department to an ID for API call
const convertKeywords = function (keywords) {
  if (keywords.includes("Egyptian Art")) {
    keywords[3] = "10";
  } else if (keywords.includes("Greek and Roman Art")) {
    keywords[3] = "13";
  } else if (keywords.includes("Islamic Art")) {
    keywords[3] = "14";
  } else if (keywords.includes("Medieval Art")) {
    keywords[3] = "17";
  } else if (keywords.includes("Modern Art")) {
    keywords[3] = "21";
  }
  console.log(keywords);
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
          src="${element.img}”
          alt=“"
          alt="" id="${element.name}"
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

var number = 0;

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
    renderQuestions(paintingsArr[number], "painting");
    number += 1;
    container.on("click", questionKeyClick);
  } else if (target.id === "sculpture") {
    storeKeyword(target.id);
    renderQuestions(sculpturesArr[number], "sculpture");
    number += 1;
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
    };
  };
  return allData.map(callback);
};

const renderObjectResults = function (objectData) {
  container.empty();
  const constructObjectResults = function (each) {
    return `<div class="object-card animate__animated animate__zoomIn m-5">
    <div class="card-img">
      <img src="${each.imageUrl}" alt="" />
    </div>
    <div class="card-header-title has-text-centered is-size-5 is-italic">
      ${each.title}
    </div>
    <div class="view-btn-container">
      <button class="view-object-btn button" id="">View More Info</button>
    </div>
  </div>`;
  };
  const objectResultCards = objectData.map(constructObjectResults).join("");
  const objectResultsContainer = `<section id="object-cards-container">${objectResultCards}</section>`;

  container.append(objectResultsContainer);
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
  // console.log(objectData);
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
    if (number < 3) {
      renderQuestions(getArrayByType(type)[number]);
      number += 1;
    } else if (number === 3) {
      container.empty();
      container.append(`<p>Getting your results...</p>`);
      convertKeywords(keyWords);
      const url = constructSearchUrl(keyWords);
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

// View Object

// DOCUMENT ONLOAD
const onReady = function () {
  navbarMenu();

  // NEED WORKING CLICK EVENT
  container.on("click", handleClick);
};

$(document).ready(onReady);
