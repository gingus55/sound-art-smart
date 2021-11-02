const paintingsArr = [
  {
    question: "Which do you prefer?",
    cards: [
      {
        name: "People",
        img: "./assets/images/paint/p-people/p-people-water.jpeg",
      },
      {
        name: "Places",
        img: "./assets/images/paint/p-landscape/p-landscape-water.jpeg",
      },
      {
        name: "Animals",
        img: "./assets/images/paint/p-animals/p-animals-oil.jpeg",
      },
    ],
  },
  {
    question: "Which medium do you like the look of?",
    cards: [
      {
        name: "Oil",
        img: "./assets/images/paint/p-landscape/p-landscape-oil.jpeg",
      },
      {
        name: "Watercolour",
        img: "./assets/images/paint/p-landscape/p-watercolor.jpg",
      },
      {
        name: "Tempera",
        img: "./assets/images/paint/p-animals/p-animals-tempera.png",
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

// EMPTY ARRAY FOR KEYWORD STORAGE
const keyWords = [];

const storeKeyword = function (word) {
  keyWords.push(word);
  console.log(keyWords);
};

const apiRequest = async function (url, options = {}) {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
