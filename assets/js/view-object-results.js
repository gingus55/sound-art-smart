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

// construct the main page of the individual results page
const renderMainSectionOfResults = function (objectData) {
  const mainResultsSectionHtml = `
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
                <span class="has-text-weight-bold">Title:</span> Wheat Field
                with Cypresses
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
  </main>`;

  return mainResultsSectionHtml;
};
