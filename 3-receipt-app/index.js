const resultContainer = document.getElementById("result");
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchContainer = document.querySelector(".search-box");

// API url to fetch meal data
const apiUrl = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

// Event listeners for search and input (when press enter)
searchBtn.addEventListener("click", searchMeal);
searchInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchMeal();
  }
});

// Handle meal function
function searchMeal() {}
