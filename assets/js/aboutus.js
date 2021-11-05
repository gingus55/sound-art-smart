console.log("howdy planet");

const aboutUsContent = [
  {
    name: "Chris",
    status: "Teacher",
    bio: "My interest in mathematics developed at an early age when I became obsessed with the statistics on the back of my passion for football. I have chosen additional education to advance my logical thinking and ability to pass the knowledge to others. I highly enjoy complexity and solving problems. In my spare time I love to read and outdoors activities with my family.",
    img: "./assets/images/aboutus/Chris.img.jpg",
  },
  {
    name: "Kayle",
    status: "Cultural Accessibility Trainer & Arts Educator",
    bio: "I'm a student in the University of Birmingham's full stack Coding Boot Camp. Prior to Boot Camp, I was an arts facilitator and accessibility specialist at an art museum, so I bring a passion for creativity, visual design, and accessibility to everything I do. In my spare time I passionate about traveling and attending various events and theatre venues. ",
    img: "./assets/images/aboutus/Kalye.img.jpg",
  },
  {
    name: "Jonathan",
    status: "Personal Trainer",
    bio: "For years I have been pursuing my passion for fitness working as a personal trainer however I always had a deep interest in technology and web design which led me to advance my skills I developed on my own and with the constructive education I am currently gaining at the Coding Boot-Camp I am hoping to switch my career in a near future. In my spear time I dedicate every minute to my beautiful daughters and biking.",
    img: "./assets/images/aboutus/Jonathan.img.png",
  },
  {
    name: "Elizabeth",
    status: "International Sales",
    bio: "My passion for travel led me to Sweden where I was working as a freelance photographer just to find myself in England few years after where I have dedicated majority of my career to the International opportunities. I currently take on a Coding Boot-Camp course at the University of Birmingham to advance my passion for learning and creating.In my spare time I enjoy cooking for my friends and hike. ",
    img: "./assets/images/aboutus/Elizabeth.img.jpg",
  },
  {
    name: "Dahir",
    status: "University Graduate",
    bio: "I am a confident, enthusiastic and outgoing individual, who has a bachelors degree in mechanical engineering. I am eager to learn new skills at every opportunity and enjoy challenging environments. I enjoy working in teams or groups as I possess great interpersonal skills and the ability to speak several languages. In my spare time I code a lot and enjoy various sport activities.",
    img: "./assets/images/aboutus/Dahir.img.png",
  },
];

const peopleContainer = $("#people-container");
const aboutContainer = $("#about-container");

// create info block
const createInfo = function (arrayUs, idName) {
  const identifier = function (each) {
    if (each.name.toLowerCase() === idName) {
      const infoBlock = `<div class="info-container">
    <img class="profile-img"
    src="${each.img}"
    alt="image of ${each.name}" 
  />
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
