// selectors
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("search-btn");

const newsQuery = document.getElementById("news-query");
const newsType = document.getElementById("news-type");
const newsDetailes = document.getElementById("news-detailes");

// Array
var newDataArray = [];

// Apis
const API_KEY = "0b4005c8527745e99a1d6166fe2cccb1";
const HEADLINES_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const GENERAL_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const SPORTS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=";
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

// Handle onclick and onload event
window.onload = () => {
  newsType.innerHTML = `<h4>Headline</h4>`;
  fetchHeadline();
};

generalBtn.addEventListener("click", () => {
  newsType.innerHTML = `<h4>General news</h4>`;
  fetchGeneralNews();
});

businessBtn.addEventListener("click", () => {
  newsType.innerHTML = `<h4>Business news</h4>`;
  fetchBusinessNews();
});

sportBtn.addEventListener("click", () => {
  newsType.innerHTML = `<h4>Sport news</h4>`;
  fetchSportNews();
});

technologyBtn.addEventListener("click", () => {
  newsType.innerHTML = `<h4>Technology news</h4>`;
  fetchTechnologyNews();
});

searchBtn.addEventListener("click", () => {
  newsType.innerHTML = `<h4>Search: ` + newsQuery.value + `</h4>`;
  fetchQueryNews();
});

// functions

const fetchHeadline = async () => {
  const response = await fetch(HEADLINES_NEWS + API_KEY);
  newDataArray = [];
  console.log(response.status);
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newDataArray = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS + API_KEY);
  newDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newDataArray = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS + API_KEY);
  newDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newDataArray = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchSportNews = async () => {
  const response = await fetch(SPORTS_NEWS + API_KEY);
  newDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newDataArray = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
  newDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newDataArray = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchQueryNews = async () => {
  if (newsQuery == null) return;
  const response = await fetch(
    SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY
  );
  newsDataArray = [];
  if ((response.status >= 200) & (response.status < 300)) {
    const myJson = await response.json();
    newDataArray = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }

  displayNews();
};

// display function
function displayNews() {
  newsDetailes.innerHTML = "";
  if ((newDataArray.length = 0)) {
    newsDetailes.innerHTML = `<h5>No data found.</h5>`;
    return;
  }

  newDataArray.forEach((news) => {
    var date = news.publishedAt.split("T");

    var count = document.createElement("div");
    count.classList.add("news-container");

    var card = document.createElement("div");
    card.classList.add("card");

    var image = document.createElement("img");
    image.classList.add("news-image");
    image.setAttribute("height", "40%");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var newsTitle = document.createElement("h5");
    newsTitle.classList.add("news-title");
    newsTitle.innerHTML = news.title;

    var newsDate = document.createElement("h6");
    newsDate.classList.add("news-date");
    newsDate.innerHTML = date[0];

    var description = document.createElement("p");
    description.classList.add("news-text");
    description.innerHTML = news.description;

    var link = document.createElement("a");
    link.classList.add("news-link");
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsTitle);
    cardBody.appendChild(newsDate);
    cardBody.appendChild(description);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    count.appendChild(card);

    newsDetails.appendChild(count);
  });
}
