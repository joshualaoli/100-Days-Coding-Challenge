const resultContainer = document.getElementById("result");
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchContainer = document.querySelector(".search-box");

// API url to fetch meal data
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Event listeners for search and input (when press enter)
searchBtn.addEventListener("click", searchMeal);
searchInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchMeal();
  }
});

// Handle meal function
function searchMeal() {
  const userInput = searchInput.value.trim();
  if (!userInput) {
    resultContainer.innerHTML = `<h3>Input field cannot be empty</h3>`;
    return;
  }
  // fetch meal data using api with user input
  fetch(apiUrl + userInput)
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      // Handle if no meal found
      if (!meal) {
        resultContainer.innerHTML = "<h3>No meal Found, Please Try Again</h3>";
        return;
      }
      const ingredients = getIngredients(meal);
      // Generate html to display meal data
      const recipeHtml = `
      <div class="details">
        <h2>${meal.strMeal}</h2>
        <h4>${meal.strArea}</h4>
      </div>
      <img src= ${meal.strMealThumb} alt=${meal.strMeal} />
      <div id="ingre-container">
        <h3>Ingredients :</h3>
        <ul>${ingredients}</ul>
      </div>
      <div id="recipe">
        <button id="hide-recipe">X</button>
        <pre id="instructions">${meal.strInstructions}</pre>
      </div>
      <button id="show-recipe">View Recipe</button>
    `;
      resultContainer.innerHTML = recipeHtml;

      const hideRecipeBtn = document.getElementById("hide-recipe");
      hideRecipeBtn.addEventListener("click", hideRecipe);

      const showRecipeBtn = document.getElementById("show-recipe");
      showRecipeBtn.addEventListener("click", showRecipe);

      searchContainer.style.opacity = "0";

      searchContainer.style.display = "none";
    })
    // Handle Error
    .catch(() => {
      searchContainer.style.opacity = "1";
      searchContainer.style.display = "grid";
      resultContainer.innerHTML = `<h3>Error fetching data!</h3>`;
    });
}

// generate html for lists of ingredients
function getIngredients(meal) {
  let ingreHtml = "";
  // There can be max 25 ingredients
  for (let i = 1; i <= 25; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      const measure = meal[`strMeasure${i}`];
      ingreHtml += `<li> ${measure} ${ingredient} </li>`;
    }
    // If ingredient doesnt exist, exit loop
    else {
      break;
    }
  }
  return ingreHtml;
}

// Handle for show and hide recipe for a meal
function hideRecipe() {
  const recipe = document.getElementById("recipe");
  recipe.style.display = "none";
}
function showRecipe() {
  const recipe = document.getElementById("recipe");
  recipe.style.display = "block";
}
