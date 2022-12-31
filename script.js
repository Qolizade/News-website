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
