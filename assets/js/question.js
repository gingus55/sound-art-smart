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
      { name: "Oil", img: "./assets/images/saslogo.png" },
      { name: "Watercolour", img: "./assets/images/saslogo.png" },
      { name: "Tempera", img: "./assets/images/saslogo.png" },
    ],
  },
  {
    question: "Which style do you fancy?",
    cards: [
      {
        name: "Egyptian Art",
        img: "./assets/images/saslogo.png",
        deptId: "10",
      },
      {
        name: "Greek and Roman Art",
        img: "./assets/images/saslogo.png",
        deptId: "13",
      },
      { name: "Islamic Art", img: "./assets/images/saslogo.png", deptId: "14" },
      {
        name: "Medieval Art",
        img: "./assets/images/saslogo.png",
        deptId: "17",
      },
      { name: "Modern Art", img: "./assets/images/saslogo.png", deptId: "21" },
    ],
  },
];
// CODE FOR QUESTION LOGIC
// PAGE TARGETS
const container = $("#question-container");
const cardPlacer = $("#placer");

// EMPTY ARRAY FOR KEYWORD STORAGE
const keyWords = [];

const storeKeyword = function () {
  console.log("storing keyword");
};

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
              alt="" id="${element.name}g"
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

  // render title
const title = buildTitle(array);
  // build cards
const cards = buildCards(array);
// empty container
  // append cards
container.append(title, cards);

  console.log("questions rendered")
}


// handleClick needs to store keyword and render next question
const handleClick = function (event) {
  const target = event.target;
  var number = 0;
  if (target.id === "painting") {
  storeKeyword();
  
// RENDER PAINTING QUESTIONS

  renderQuestions(paintingsArr[number]);

  } else if(target.id ==="sculpture"){
  storeKeyword();



  } else {

  };
 
  // RENDER NEXT QUESTION
};;

// DOCUMENT ONLOAD
const onReady = function () {
  navbarMenu();

  // NEED WORKING CLICK EVENT
  container.on("click", handleClick);
};

$(document).ready(onReady);
