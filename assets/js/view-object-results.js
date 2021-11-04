// NAVBAR -- mobile menu

const navbarMenu = function () {
  const burgerIcon = $("#burger");
  const navbarMenu = $("#nav-links");

  const isActiveBurgerIcon = function () {
    navbarMenu.toggle("is-active");
  };

  burgerIcon.on("click", isActiveBurgerIcon);
};

// store container of the results page in a variable to append into
const bodyContainer = $("body");
const mainContainer = $(".main-container");
const quoteContainer = $("#quote-box");
const accordionContainer = $(".accordions-container");

//url information
const urlObjectId = new URL(window.location).search.split("=")[1];
const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${urlObjectId}`;

// initialize LS
function initializeLocalStorage() {
  const objectInfo = JSON.parse(localStorage.getItem("object-data"));
  if (!objectInfo) {
    return localStorage.setItem("object-data", JSON.stringify([]));
  }
}

// get info from local storage
function getFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem("object-data"));
  return localStorageData === null ? JSON.stringify([]) : localStorageData;
}

// transform quote data
const getQuoteOfTheDayContents = function (quoteOfTheDayResult) {
  const quoteOfTheDayContents = quoteOfTheDayResult.contents.quotes[0];

  return {
    quote: quoteOfTheDayContents.quote,
    author: quoteOfTheDayContents.author,
  };
};

// construct the artist quote section
renderArtistQuote = function (quoteData) {
  const quoteBlockHtml = `<blockquote>
      <p class="is-size-3 is-italic mb-5">
        “${quoteData.quote}”
      </p>
      <p class="is-size-3">${quoteData.author}</p>
    </blockquote> `;

  return quoteContainer.append(quoteBlockHtml);
};

const getQuoteOfTheDayData = async function () {
  const quoteOfTheDayUrl = "https://quotes.rest/qod?category=art&language=en";

  const quoteOfTheDayResponse = await fetch(quoteOfTheDayUrl);
  const quoteOfTheDayResult = await quoteOfTheDayResponse.json();

  const quoteOfTheDayData = getQuoteOfTheDayContents(quoteOfTheDayResult);

  // return quoteOfTheDayData;
  renderArtistQuote(quoteOfTheDayData);
};

// convert object data
const getObjectData = function (dataInfo) {
  const objectData = {
    title: dataInfo.title,
    accessionYear: dataInfo.accessionYear,
    artistName: dataInfo.artistDisplayName,
    artistBio: dataInfo.artistDisplayBio,
    class: dataInfo.classification,
    line: dataInfo.creditLine,
    department: dataInfo.department,
    size: dataInfo.dimensions,
    medium: dataInfo.medium,
    date: dataInfo.objectDate,
    name: dataInfo.objectName,
    image: dataInfo.primaryImage,
  };

  return objectData;
};

// construct the main page of the individual results page
const renderMainSectionOfResults = function (objectData) {
  const mainResultsSectionHtml = `
    <div class="is-size-1 title has-text-centered mt-5 mb-5">${objectData.title}</div>

    <div class="btn-container has-text-centered mb-5">
      <button class="button is-medium is-danger">Save</button>
    </div>

    <main class="margin-adjustment">
      

        <div class="is-flex" id="img-facts-container">
          <!-- pAINTING CARD -->
          <div class="paint-card m-5">
            <div class="card-img">
              <img
                src=${objectData.image}
          alt=“landscape-painting"
                alt=""
              />
            </div>
          </div>

          
          <div class="art-works-fact-container">
            <div class="title has-text-centered is-underlined mb-6">
              Facts About The Art Work
            </div>
            <div
              class="
                is-flex
                is-flex-direction-row
                is-flex-wrap-wrap
                is-align-content-center
              "
              id="facts"
            >
              <div class=" pl-5 dataText">
                <ul>
                  <li>
                    <span class="has-text-weight-bold">Art Work Name:</span> ${objectData.name}
                  </li>

                  <li>
                    <span class="has-text-weight-bold">Artist:</span> ${objectData.artistName} ${objectData.artistBio}
                  </li>

                  <li>
                  <span class="has-text-weight-bold">Artist Bio:</span> ${objectData.artistBio}
                </li>

                  <li><span class="has-text-weight-bold">Date:</span> ${objectData.date}</li>

                  <li>
                    <span class="has-text-weight-bold">Medium:</span> ${objectData.medium}
                  </li>

                </ul>
              </div>

              <div class=" pl-5 dataText">
                <ul>
                
                <li>
                <span class="has-text-weight-bold">Department:</span> ${objectData.department}
              </li>

                  <li>
                    <span class="has-text-weight-bold">Dimensions:</span> ${objectData.size}
                  </li>
                  <li>
                    <span class="has-text-weight-bold">Classification:</span>
                    ${objectData.class}
                  </li>
                  <li>
                    <span class="has-text-weight-bold">Credit Line:</span>
                    ${objectData.line}
                  </li>
                  <li>
                    <span class="has-text-weight-bold">Accession Number:</span>
                    ${objectData.accessionYear}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

    `;

  return mainResultsSectionHtml;
};

// append all the object page to the body
const appendAllObjectResultContentToBody = function (objectData) {
  mainContainer.append(renderMainSectionOfResults(objectData));
};

// saving object information

const savingDataInfo = function (objData) {
  return {
    objectID: objData.objectID,
    imageUrl: objData.primaryImage,
    title: objData.title,
    redirectLink: url,
  };
};

// Make Api call for object data

const makeObjectCall = async function () {
  const data = await apiRequest(url);

  const dataFromObject = getObjectData(data);

  appendAllObjectResultContentToBody(dataFromObject);

  const saveBtn = $(".btn-container");

  const handleSaveBtn = function (event) {
    const saveInfoToFav = savingDataInfo(data);

    const localStorageArray = getFromLocalStorage();

    var index = localStorageArray.findIndex(
      (x) => x.objectID == saveInfoToFav.objectID
    );
    if (index === -1) {
      localStorageArray.push(saveInfoToFav);
      localStorage.setItem("object-data", JSON.stringify(localStorageArray));
    }
  };

  saveBtn.on("click", handleSaveBtn);
};

// construct accordion

// random art facts

const renderRandomArtFact = function () {
  const factsOfArt = [
    "Art used to be an Olympic event: The Olympics wasn’t always about abs and doping scandals. The founder of the modern Games, the Baron Pierre de Coubertin, was enamoured with the idea of the true Olympian being a talented artist and sportsperson. Thanks to him, between 1912 and 1948 medals were given out for sporting-inspired masterpieces of architecture, music, painting, sculpture and literature.",
    "The Mona Lisa has her own mailbox in the Louvre because of all the love letters she receives:Over the years many have fallen prey to the portrait’s ‘limpid and burning eyes’, leaving her offerings of flowers, poems and, yes, love notes. Artist Luc Maspero allegedly took this fervour to a new high – and then low – in 1852, diving off a hotel balcony because “For years I have grappled desperately with her smile. I prefer to die.” Who knew art appreciation could be so dark?",
    "The colour wheel predates the United States: Considering the US is one of the oldest modern democracies, this is pretty amazing. Sir Isaac Newton invented the colour wheel in 1706 by refracting white sunlight into its six colours. The realisation that light alone was responsible for colour was radical, and the wheel proved especially useful for artists, who could now easily observe the most effective colour complementation.",
    "In 2003 street artist Banksy stuck his own work to the wall in the Tate Modern Museum: The prank was soon undone by its inadequate glue, but for a few hours Crimewatch UK Has Ruined the Countryside For All of Us was hung in one of the world’s most famous museums. It also inspired Andrzej Sobiepan, a Polish art student, to a similar feat in 2005, where for three days he successfully passed off his work as part of the National Museum’s collection.",
    "landscape painting, the depiction of natural scenery in art. Landscape paintings may capture mountains, valleys, bodies of water, fields, forests, and coasts and may or may not include man-made structures as well as people. Although paintings from the earliest ancient and Classical periods included natural scenic elements, landscape as an independent genre did not emerge in the Western tradition until the Renaissance in the 16th century. In the Eastern tradition, the genre can be traced back to 4th-century-CE China.",
    "Abstract art is modern art which does not represent images of our everyday world. It has colour, lines and shapes (form), but they are not intended to represent objects or living things. Often the artists were influenced by ideas and philosophies of abstraction. Abstract art is found in painting and in sculpture. There are also many works of art which are partly abstract, and partly representational. And there are many artists who work in abstract and other types of modern art.Purely abstract art is a 20th-century invention. It grew out of the earlier forms of modern art, but it is perhaps the one movement which is absolutely modern. It has no roots in earlier art (as we use the term today).",
  ];

  const randomFacts = Math.floor(Math.random() * factsOfArt.length);

  return factsOfArt[randomFacts];
};

// store the content of the accordion in a array
const accordionContent = [
  {
    title: "Art-Work",
    info: renderRandomArtFact(),
  },
  {
    title: "painting",
    info: "People have been painting for as long as 30,000 years! Early Cave paintings were drawn with red or yellow ochre, hematite, manganese oxide, and charcoal may have been made by early Homo sapiens as long as 30,000 years ago. These would have been ground to make up a primitive paint substance.  Other ingredients used were animal blood and fat. ",
  },
  {
    title: "Animals",
    info: "Animals have been a source of inspiration for many artists. From art about rural life and growth, to myths and legends, animals are used in art in many different ways. Art can help us explore our relationship to wildlife and can help us think about how we care for animals and the environment. When it comes to animals, exploring habitats is one of the central themes for artists. With a world of textures, colours and shapes to explore, nature is an exciting feature in many artworks. Animals in artworks can make us consider our own relationship to nature. How do we treat wildlife and its environment? Are there some animals we look after more than others?",
  },
  {
    title: "People",
    info: ".......................",
  },
  {
    title: "Oil",
    info: "Oil paints were first used between the 5th & 9th century to decorate shields and other objects in western Afghanistan.The use of oil paints did not appear in Europe until the 15th century. Prior to this, most artist used egg tempera. Prior to the 19th Century, an artist's studio looked like a laboratory. The artists had to grind the pigments, boil the oil and use exact formulas to create their oil paints. Apprentices were hired to help with this chore.",
  },
  {
    title: "Watercolour",
    info: "Watercolors tend to be transparent when applied to your painting surface. that means it allows the light to pass through your painting canvas or painting paper. You can purchase watercolor that comes in tubes or in pans.  Watercolors in tubes are easy to use as you can directly apply them to your painting surface. You can also dilute tube watercolors with water to achieve your desired color or tint. On the other hand, watercolors in pans usually come with palette in them. Watercolors in pans are more expensive than tube watercolors. The most commonly used watercolors by artists are the ones in tubes.",
  },
  {
    title: "Tempera",
    info: "tempera painting, painting executed with pigment ground in a water-miscible medium. The word tempera originally came from the verb temper, “to bring to a desired consistency.” Dry pigments are made usable by “tempering” them with a binding and adhesive vehicle.Tempera is an ancient medium, having been in constant use in most of the world’s cultures until it was gradually superseded by oil paints in Europe, during the Renaissance. Tempera was the original mural medium in the ancient dynasties of Egypt, Babylonia, Mycenaean Greece, and China and was used to decorate the early Christian catacombs. It was employed on a variety of supports, from the stone stelae (or commemorative pillars), mummy cases, and papyrus rolls of ancient Egypt to the wood panels of Byzantine icons and altarpieces and the vellum leaves of medieval illuminated manuscripts. ",
  },
  {
    title: "Egyptian Art",
    info: "Much of the artwork created by the Ancient Egyptians had to do with their religion. They would fill the tombs of the Pharaohs with paintings and sculptures. Much of this artwork was there to help the Pharaohs in the afterlife. Temples were another popular place for art. The temples often held large statues of their gods as well as many paintings on the walls. The Egyptians are famous for their giant works of sculptures. Some examples of this include the Great Sphinx of Giza and the statues of Ramses II at the Abu Simbel temples. Although they are famous for their giant statues, the Egyptians also carved smaller, more ornate sculptures. They used various materials including alabaster, ivory, limestone, basalt, wood gilded with gold, and sometimes even solid gold. In Ancient Egypt the tomb walls of the rich and powerful were often filled with paintings. These paintings were there to help the person in the afterlife. They often depicted the person buried passing into the afterlife. They would show scenes of this person happy in the afterlife. In one painting the man buried is shown hunting and his wife and son are in the picture.",
  },
  {
    title: "Greek and Roman Art",
    info: "The art of the ancient Greeks and Romans is called classical art. This name is used also to describe later periods in which artists looked for their inspiration to this ancient style. The Romans learned sculpture and painting largely from the Greeks and helped to transmit Greek art to later ages. Classical art owes its lasting influence to its simplicity and reasonableness, its humanity, and its sheer beauty. The first and greatest period of classical art began in Greece about the middle of the 5th century bc. By that time Greek sculptors had solved many of the problems that faced artists in the early archaic period. They had learned to represent the human form naturally and easily, in action or at rest. They were interested chiefly in portraying gods, however. They thought of their gods as people, but grander and more beautiful than any human being. They tried, therefore, to portray ideal beauty rather than any particular person. Their best sculptures achieved almost godlike perfection in their calm, ordered beauty.",
  },
  {
    title: "Islamic Art",
    info: "Islamic art encompasses the visual arts produced from the seventh century onward by both Muslims and non-Muslims who lived within the territory that was inhabited by, or ruled by, culturally Islamic populations. It is thus a very difficult art to define because it spans some 1400 years, covering many lands and populations. This art is also not of a specific religion, time, place, or single medium. Instead Islamic art covers a range of artistic fields including architecture, calligraphy, painting, glass, ceramics, and textiles, among others. Islamic art is not restricted to religious art, but instead includes all of the art of the rich and varied cultures of Islamic societies. It frequently includes secular elements and elements that are forbidden by some Islamic theologians. Islamic religious art differs greatly from Christian religious art traditions. Because figural representations are generally considered to be forbidden in Islam, the word takes on religious meaning in art as seen in the tradition of calligraphic inscriptions. Calligraphy and the decoration of manuscript Qu’rans is an important aspect of Islamic art as the word takes on religious and artistic significance. Islamic art was influenced by Greek, Roman, early Christian, and Byzantine art styles, as well as the Sassanian art of pre-Islamic Persia. Central Asian styles were brought in with various nomadic incursions; and Chinese influences had a formative effect on Islamic painting, pottery, and textiles.",
  },
  {
    title: "Medieval Art",
    info: "At the beginning of the medieval period most significant works of art were very rare and costly objects associated with secular elites, monasteries or major churches and, if religius, largely made by monks. Subsequently, by the end of middle ages works considerable artistic interest could be found in the small town and significant number of bourgeois homes in towns, their production was in many places an important local industry.",
  },
  {
    title: "Modern Art",
    info: `places painting are ..........`,
  },
  {
    title: "sculptures",
    info: "Artist Willard Wigan once inhaled his own work: What’s that, you say? He inhaled a painting?? The man must be enormous! Not quite. Wigan’s works are ‘micro-sculptures’, so tiny they must be viewed through a microscope. In creating his art, Wigan has to slow his heartbeat and work between pulses. The work he inhaled was Alice, from Alice in Wonderland, but apparently she was even better when remade.",
  },
  {
    title: "Metal",
    info: `places painting are ..........`,
  },
  {
    title: "Gold",
    info: `places painting are ..........`,
  },
  {
    title: "Marble",
    info: `places painting are ..........`,
  },
  {
    title: "Clay",
    info: `places painting are ..........`,
  },
];

// construct a constant accordion box

const renderConstantAccordion = function (artWorkAccordion) {
  const accordionHtml = `<section class="accordions-container margin-adjustment">
  <div class="accordions">
    <div class="accordions-item">
      <h2 class="accordions-title is-size-3">${artWorkAccordion[0].title}</h2>
      <p class="accordions-answer is-size-5">${artWorkAccordion[0].info}</p>
    </div>
  </div>
</section>`;

  return accordionContainer.append(accordionHtml);
};

// construct a single accordion box
const renderAccordion = function (accordionContentArray, userOption) {
  // map through accordion content array

  const findUserElement = function (each) {
    if (each.title === userOption) {
      const accordionHtml = `<section class="accordions-container margin-adjustment">
        <div class="accordions">
          <div class="accordions-item">
            <h2 class="accordions-title is-size-3">${each.title}</h2>
            <p class="accordions-answer is-size-5">${each.info}</p>
          </div>
        </div>
      </section>`;

      return accordionContainer.append(accordionHtml);
    }
  };

  return accordionContentArray.forEach(findUserElement);
};

//construct accordion for selected catogories by user
const generateUserAccordion = function (userArray) {
  // loop through the chosen user catogary array and generate an accordion for each one

  const fullAccordion = function (each) {
    return renderAccordion(accordionContent, each);
  };

  return userArray.forEach(fullAccordion);
};

// add an event listener to the + sign to create the accordion drop down effect
const handleAccordionFunctionality = function () {
  const accordionsTitle = document.querySelectorAll(".accordions-title");

  accordionsTitle.forEach((eachAccordionTitle) => {
    eachAccordionTitle.addEventListener("click", () => {
      const height = eachAccordionTitle.nextElementSibling.scrollHeight;

      eachAccordionTitle.classList.toggle("active-headers");

      if (eachAccordionTitle.classList.contains("active-headers")) {
        eachAccordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
      } else {
        eachAccordionTitle.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};

// render the whole accordion with its on click drop down functionality
const renderAllAccordions = function (artWorkAccordion, userArray) {
  renderConstantAccordion(artWorkAccordion);
  generateUserAccordion(userArray);
  handleAccordionFunctionality();
};

const handleResponse = function (response) {
  return response.json();
};

const array = ["painting", "Places", "Tempera", "Egyptian Art", "Islamic Art"];

// document on load
const onReady = function () {
  navbarMenu();

  initializeLocalStorage();

  // getQuoteOfTheDayData();

  makeObjectCall();

  renderAllAccordions(accordionContent, array);
};

$(document).ready(onReady);
