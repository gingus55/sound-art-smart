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
      { name: "Oil", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
      { name: "Watercolour", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
      { name: "Tempera", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
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
      { name: "Islamic Art", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", deptId: "14" },
      {
        name: "Medieval Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "17",
      },
      { name: "Modern Art", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", deptId: "21" },
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
      { name: "Clay", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
      { name: "Marble", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
      { name: "Metal", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
      { name: "Gold", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" }
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
      { name: "Islamic Art", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", deptId: "14" },
      {
        name: "Medieval Art",
        img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        deptId: "17",
      },
      { name: "Modern Art", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", deptId: "21" },
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

const convertKeywords = function(array){
  const other =array.slice(3);
  if (other=="Egyptian Art")
  {
    id = "10";
  array[3]=id
  }else if (other=="Greek and Roman Art")
  {
    id = "13";
  array[3]=id
  }else if (other=="Islamic Art")
  {
    id = "14";
  array[3]=id
  }else if (other=="Medieval Art")
  {
    id = "17";
  array[3]=id
  }else if (other=="Modern Art")
  {
    id = "21";
  array[3]=id
  }
console.log(array);

}

// build title
const buildTitle = function (obj) {
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
  ${obj.question}
</div></div>`;
};
// build cards
const buildCards = function (array) {
  array.cards.forEach((element) => {
    answerCard = `<div class="paint-card animate__animated animate__zoomIn m-5" id="${element.name}">
          <div class="card-img" id="${element.name}">
            <img
              src="${element.img}”
       alt=“"
              alt="" id="${element.name}"
            />
          </div>
          <div class="card-header-title is-centered is-size-5" id="${element.name}">${element.name}</div>
        </div>`;
    cardPlacer.append(answerCard);
  });
  return cardPlacer;
};

// RENDER QUESTIONS

const renderQuestions = function(array){
container.empty();
cardPlacer.empty();
  // render title
const title = buildTitle(array);
  // build cards
const cards = buildCards(array);
  // append cards
container.append(title, cards);
}

var number = 0;

const questionKeyClick = function (event) {
  if (number < 3) {
    const target = event.target.id;
    storeKeyword(target);
    renderQuestions(paintingsArr[number]);
    number += 1;
    console.log(number);
  } else if (number === 3) {
    const target = event.target.id;
    storeKeyword(target);
    container.empty();
    const tempMessage = `<p>Getting your results...</p>`;
    container.append(tempMessage);
    convertKeywords(keyWords);
    makeApiCall(keyWords);
  }
};

const questionKeyClickTwo = function (event) {
  if (number < 3) {
    const target = event.target.id;
    storeKeyword(target);
    renderQuestions(sculpturesArr[number]);
    number += 1;
    console.log(number);
  } else if (number === 3) {
    const target = event.target.id;
    storeKeyword(target);
    container.empty();
    const tempMessage = `<p>Getting your results...</p>`;
    container.append(tempMessage);
    convertKeywords(keyWords);
    makeApiCall(keyWords);
  }
};

// handleClick needs to store keyword and render next question
const handleClick = function (event) {
  const target = event.target;
  if (target.id === "painting") {
    storeKeyword(target.id);
    renderQuestions(paintingsArr[number]);
    number += 1;
    container.on("click", questionKeyClick);
  } else if (target.id === "sculpture") {
    storeKeyword(target.id);
    renderQuestions(sculpturesArr[number]);
    number += 1;
    container.on("click", questionKeyClickTwo);
  }

  // RENDER NEXT QUESTION
};

// look at making an API call to generate proposed pieces
const handleResponse = function (response) {
  return response.json();
};

const handleData = function (response) {
  console.log(response);
  const objArray = response.objectIDs;
  // generate array of 6 objects

  // Shuffle array
  const shuffled = objArray.sort(() => 0.5 - Math.random());

  // Get sub-array of first 6 elements after shuffled
  let selected = shuffled.slice(0, 6);
  // fetch data for each of the 6 objects from mock data headings
  console.log(selected);

  // perhaps generate keywords for a quotation API call
};;

const makeApiCall = function (keyWords) {
  console.log(keyWords);
  // construct url
  const dept = keyWords[3];
  // console.log(dept);
  const searchWordOne = keyWords[0];
  const searchWordTwo = keyWords[1];
  const searchWordThree = keyWords[2];
  const myUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${dept}&q=${searchWordOne}, ${searchWordTwo}, ${searchWordThree}`;
  // make call
  console.log(myUrl);
  fetch(myUrl).then(handleResponse).then(handleData);
};

// DOCUMENT ONLOAD
const onReady = function () {
  navbarMenu();

  // NEED WORKING CLICK EVENT
  container.on("click", handleClick);
};

$(document).ready(onReady);
