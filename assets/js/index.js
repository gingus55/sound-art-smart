const burgerMenu = $("#burger");
const navbarMenu = $("#nav-links");
const quoteContainer = $("#landing-quote-container");

// set API URL
const quoteOfTheDayUrl = "https://quotes.rest/qod?category=art&language=en";

// Mobile burger menu
const activateBurgerMenu = function () {
  navbarMenu.toggle("is-active");
};

$(burgerMenu).click(activateBurgerMenu);

// transform quote data
const getQuoteOfTheDayContents = function (quoteOfTheDayResult) {
  const quoteOfTheDayContents = quoteOfTheDayResult.contents.quotes[0];

  return {
    quote: quoteOfTheDayContents.quote,
    author: quoteOfTheDayContents.author,
  };
};

// render quote of the day
const renderQuoteOfTheDay = function (quoteOfTheDayData) {
  const quoteOfTheDay = `<h2 class="subtitle is-4 has-text-centered" id="landing-quote">
  "${quoteOfTheDayData.quote}" ~${quoteOfTheDayData.author}
</h2>`;

  quoteContainer.append(quoteOfTheDay);
};

// Quote of the day API call
const getQuoteOfTheDayData = async function () {
  const quoteOfTheDayResponse = await fetch(quoteOfTheDayUrl);
  const quoteOfTheDayResult = await quoteOfTheDayResponse.json();

  const quoteOfTheDayData = getQuoteOfTheDayContents(quoteOfTheDayResult);

  // return quoteOfTheDayData;
  renderQuoteOfTheDay(quoteOfTheDayData);
};

const onReady = function () {
  getQuoteOfTheDayData();
};

$(document).ready(onReady);
