const paintingsArr = [
  {
    question: "Which do you prefer?",
    cards: [
      {
        name: "People",
        img: "./assets/images/paint/p-people.jpeg",
      },
      {
        name: "Places",
        img: "./assets/images/paint/p-places.jpeg",
      },
      {
        name: "Animals",
        img: "./assets/images/paint/p-animals.jpeg",
      },
    ],
  },
  {
    question: "Which medium do you like the look of?",
    cards: [
      {
        name: "Oil",
        img: "./assets/images/paint/p-oil.jpeg",
      },
      {
        name: "Watercolour",
        img: "./assets/images/paint/p-watercolor.jpg",
      },
      {
        name: "Tempera",
        img: "./assets/images/paint/p-tempera.png",
      },
    ],
  },
  {
    question: "Which style do you fancy?",
    cards: [
      {
        name: "Egyptian Art",
        img: "./assets/images/paint/p-egyptian.png",
        deptId: "10",
      },
      {
        name: "Greek and Roman Art",
        img: "./assets/images/paint/p-greekroman.jpg",
        deptId: "13",
      },
      {
        name: "Islamic Art",
        img: "./assets/images/paint/p-islamic.jpg",
        deptId: "14",
      },
      {
        name: "Medieval Art",
        img: "./assets/images/paint/p-medieval.jpg",
        deptId: "17",
      },
      {
        name: "Modern Art",
        img: "./assets/images/paint/p-modern.jpg",
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
        img: "./assets/images/sculpture/s-people.jpg",
      },
      {
        name: "Places",
        img: "./assets/images/sculpture/s-places.jpg",
      },
      {
        name: "Animals",
        img: "./assets/images/sculpture/s-animals.jpg",
      },
    ],
  },
  {
    question: "Which medium do you like the look of?",
    cards: [
      {
        name: "Clay",
        img: "./assets/images/sculpture/s-clay.jpg",
      },
      {
        name: "Marble",
        img: "./assets/images/sculpture/s-marble.jpg",
      },
      {
        name: "Metal",
        img: "./assets/images/sculpture/s-metal.jpg",
      },
      {
        name: "Gold",
        img: "./assets/images/sculpture/s-gold.jpg",
      },
    ],
  },
  {
    question: "Which style do you fancy?",
    cards: [
      {
        name: "Egyptian Art",
        img: "./assets/images/sculpture/s-egyptian.jpg",
        deptId: "10",
      },
      {
        name: "Greek and Roman Art",
        img: "./assets/images/sculpture/s-greekroman.jpg",
        deptId: "13",
      },
      {
        name: "Islamic Art",
        img: "./assets/images/sculpture/s-islamic.jpg",
        deptId: "14",
      },
      {
        name: "Medieval Art",
        img: "./assets/images/sculpture/s-medieval.jpg",
        deptId: "17",
      },
      {
        name: "Modern Art",
        img: "./assets/images/sculpture/s-modern.jpg",
        deptId: "21",
      },
    ],
  },
];

// EMPTY ARRAY FOR KEYWORD STORAGE
const keyWords = [];

const storeKeyword = function (word) {
  keyWords.push(word);
};

const apiRequest = async function (url, options = {}) {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
