console.log("howdy planet");

const aboutUsContent = [
  {
    name: "Chris",
    status: "status",
    bio: "bio",
    img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190430171751-mona-lisa.jpg",
  },
  {
    name: "Kayle",
    status: "status",
    bio: "bio",
    img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190430171751-mona-lisa.jpg",
  },
  {
    name: "Jonathan",
    status: "status",
    bio: "bio",
    img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190430171751-mona-lisa.jpg",
  },
  {
    name: "Elizabeth",
    status: "status",
    bio: "bio",
    img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190430171751-mona-lisa.jpg",
  },
  {
    name: "Dahir",
    status: "status",
    bio: "bio",
    img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190430171751-mona-lisa.jpg",
  },
];

const peopleContainer = $("#people-container");
const aboutContainer = $("#about-container");

// create info block
const createInfo = function (arrayUs, idName) {
  const identifier = function (each) {
    if (each.name.toLowerCase() === idName) {
      const infoBlock = `<div class="info-container">
    <img class="image" src=${each.img}
    alt=“landscape-painting" alt="image of ${each.name}" /> 
    <div class="info">
      <h1 class="name" id="name">${each.name}</h1>
      <h2 class="status" id="status">${each.status}</h2>
      <p class="about" id ="about">
      ${each.bio}
      </p>
    </div>
    </div>`;
      return aboutContainer.append(infoBlock);
    }
  };
  return arrayUs.forEach(identifier);
};

const handleClick = function (event) {
  const target = $(event.target);
  if (target.attr("id") == "painting") {
    const name = target.attr("data-name");
    aboutContainer.empty();
    createInfo(aboutUsContent, name);
  }
};

const onReady = function () {
  peopleContainer.on("click", handleClick);
};

$(document).ready(onReady);
