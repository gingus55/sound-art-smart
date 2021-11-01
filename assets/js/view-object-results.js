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
  <div class="is-size-1 title has-text-centered mt-5 mb-5">ART WORK NAME</div>

  <div class="btn-container has-text-centered mb-5">
    <button class="button is-medium is-danger">Save</button>
  </div>

  <main class="margin-adjustment">
      <!-- Art work image and art work facts column    -->

      <div class="is-flex" id="img-facts-container">
        <!-- pAINTING CARD -->
        <div class="paint-card m-5">
          <div class="card-img">
            <img
              src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190430171751-mona-lisa.jpg”
        alt=“landscape-painting"
              alt=""
            />
          </div>
        </div>

        <!--ART WORK FACTS LIST -->
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
            <div class="is-size-6 pl-5">
              <ul>
                <li>
                  <span class="has-text-weight-bold">Object Name:</span> Wheat
                  Field with Cypresses
                </li>

                <li>
                  <span class="has-text-weight-bold">Artist:</span> Vincent van
                  Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)
                </li>

                <li><span class="has-text-weight-bold">Date:</span> 1889</li>

                <li>
                  <span class="has-text-weight-bold">Medium:</span> Oil on
                  canvas
                </li>

                <li>
                  <span class="has-text-weight-bold">Department:</span> Oil on
                  canvas
                </li>
              </ul>
            </div>
            <div class="is-size-6 pl-5">
              <ul>
                <li>
                  <span class="has-text-weight-bold">Dimensions:</span> 28 7/8 ×
                  36 3/4 in. (73.2 × 93.4 cm)
                </li>
                <li>
                  <span class="has-text-weight-bold">Classification:</span>
                  Paintings
                </li>
                <li>
                  <span class="has-text-weight-bold">Credit Line:</span>
                  Purchase, The Annenberg Foundation Gift, 1993
                </li>
                <li>
                  <span class="has-text-weight-bold">Accession Number:</span>
                  1993.132
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

// construct the artist quote section
renderArtistQuote = function (quoteData) {
  const quoteBlockHtml = `<div class="has-text-centered" id="quote-box">
  <blockquote>
    <p class="is-size-3 is-italic mb-5">
      “It is good to love many things, for therein lies the true strength,
      and whosoever loves much performs much, and can accomplish much, and
      what is done in love is well done.”
    </p>
    <p class="is-size-3">Vincent van Gogh</p>
  </blockquote>
</div>`;

  return quoteBlockHtml;
};

// append all the object page to the body
const appendAllObjectResultContentToBody = function () {
  bodyContainer.append(renderMainSectionOfResults(), renderArtistQuote());
};

// construct accordion

// random art facts

const renderRandomArtFact = function () {
  const factsOfArt = [
    "Art used to be an Olympic event: The Olympics wasn’t always about abs and doping scandals. The founder of the modern Games, the Baron Pierre de Coubertin, was enamoured with the idea of the true Olympian being a talented artist and sportsperson. Thanks to him, between 1912 and 1948 medals were given out for sporting-inspired masterpieces of architecture, music, painting, sculpture and literature.",
    "The Mona Lisa has her own mailbox in the Louvre because of all the love letters she receives:Over the years many have fallen prey to the portrait’s ‘limpid and burning eyes’, leaving her offerings of flowers, poems and, yes, love notes. Artist Luc Maspero allegedly took this fervour to a new high – and then low – in 1852, diving off a hotel balcony because “For years I have grappled desperately with her smile. I prefer to die.” Who knew art appreciation could be so dark?",
    "The colour wheel predates the United States: Considering the US is one of the oldest modern democracies, this is pretty amazing. Sir Isaac Newton invented the colour wheel in 1706 by refracting white sunlight into its six colours. The realisation that light alone was responsible for colour was radical, and the wheel proved especially useful for artists, who could now easily observe the most effective colour complementation.",
    "In 2003 street artist Banksy stuck his own work to the wall in the Tate Modern Museum: The prank was soon undone by its inadequate glue, but for a few hours Crimewatch UK Has Ruined the Countryside For All of Us was hung in one of the world’s most famous museums. It also inspired Andrzej Sobiepan, a Polish art student, to a similar feat in 2005, where for three days he successfully passed off his work as part of the National Museum’s collection.",
  ];

  const randomFacts = Math.floor(Math.random() * factsOfArt.length);

  return factsOfArt[randomFacts];
};

const array = [
  `painting`,
  `landscape`,
  "portrait",
  "abstract",
  "animals",
  "sculptures",
];

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
    title: "landscape",
    info: "landscape painting, the depiction of natural scenery in art. Landscape paintings may capture mountains, valleys, bodies of water, fields, forests, and coasts and may or may not include man-made structures as well as people. Although paintings from the earliest ancient and Classical periods included natural scenic elements, landscape as an independent genre did not emerge in the Western tradition until the Renaissance in the 16th century. In the Eastern tradition, the genre can be traced back to 4th-century-CE China.",
  },
  {
    title: "portrait",
    info: "Portraits Which Hold a Secret: The history of portrait painting is full of masterpieces where their creators chose to hide a secret message, a figure, or even a portrait of themselves in their creations. The secret of oil painting ‘Mona Lisa’, in which scientists have discovered a microscopic ‘LV’ (initials of Leonardo da Vinci, the creator) written on the left eye of the lady! Similarly, the hidden story of oil painting in the famous portrait Bacchus by Caravaggio, is the artist’s portrait painted inside the glass of vine. Well, Genius is the word!",
  },
  {
    title: "abstract",
    info: "Abstract art is modern art which does not represent images of our everyday world. It has colour, lines and shapes (form), but they are not intended to represent objects or living things. Often the artists were influenced by ideas and philosophies of abstraction. Abstract art is found in painting and in sculpture. There are also many works of art which are partly abstract, and partly representational. And there are many artists who work in abstract and other types of modern art.Purely abstract art is a 20th-century invention. It grew out of the earlier forms of modern art, but it is perhaps the one movement which is absolutely modern. It has no roots in earlier art (as we use the term today).",
  },
  {
    title: "animals",
    info: "Animals have been a source of inspiration for many artists. From art about rural life and growth, to myths and legends, animals are used in art in many different ways. Art can help us explore our relationship to wildlife and can help us think about how we care for animals and the environment. When it comes to animals, exploring habitats is one of the central themes for artists. With a world of textures, colours and shapes to explore, nature is an exciting feature in many artworks. Animals in artworks can make us consider our own relationship to nature. How do we treat wildlife and its environment? Are there some animals we look after more than others?",
  },
  {
    title: `people`,
    info: `abstract painting are ..........`,
  },
  {
    title: `places`,
    info: `places painting are ..........`,
  },
  {
    title: "sculptures",
    info: "Artist Willard Wigan once inhaled his own work: What’s that, you say? He inhaled a painting?? The man must be enormous! Not quite. Wigan’s works are ‘micro-sculptures’, so tiny they must be viewed through a microscope. In creating his art, Wigan has to slow his heartbeat and work between pulses. The work he inhaled was Alice, from Alice in Wonderland, but apparently she was even better when remade.",
  },
  {
    title: "object",
    info: `places painting are ..........`,
  },
  {
    title: "gold",
    info: `places painting are ..........`,
  },
  {
    title: "marble",
    info: `places painting are ..........`,
  },
  {
    title: "wood",
    info: `places painting are ..........`,
  },
  {
    title: "clay",
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

  return bodyContainer.append(accordionHtml);
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

      return bodyContainer.append(accordionHtml);
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

// Make Api call
const makeObjectCall = async function () {
  const urlObjectId = new URL(window.location).search.split("=")[1];
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${urlObjectId}`;

  const data = await apiRequest(url);

  console.log(data);

  return data;
  // fetch(url).then(handleResponse).then(handleData);
};

// document on load
const onReady = function () {
  navbarMenu();

  makeObjectCall();

  appendAllObjectResultContentToBody();

  renderAllAccordions(accordionContent, array);
};

$(document).ready(onReady);
