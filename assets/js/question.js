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
      { name: "People", img: "./assets/images/saslogo.png" },
      { name: "Places", img: "./assets/images/saslogo.png" },
      { name: "Animals", img: "./assets/images/saslogo.png" },
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

// EMPTY ARRAY FOR KEYWORD STORAGE
const keyWords = [];

const storeKeyword = function () {
  console.log("storing keyword");
};

// handleClick needs to store keyword and render next question
const handleClick = function (event) {
  const target = event.target;
  console.log(target);
  // STORE KEYWORD
  storeKeyword();
  // RENDER NEXT QUESTION
};

// DOCUMENT ONLOAD
const onReady = function () {
  navbarMenu();

  // NEED WORKING CLICK EVENT
  container.on("click", handleClick);
};

$(document).ready(onReady);
