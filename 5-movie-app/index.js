let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// function to fetch data by api
let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  //   if input is empty
  if (movieName.length <= 0) {
    result.innerHTML = `
    <h3 class="msg">Please enter a movie name </h3>
    `;
  }

  // if input isn't empty
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // if movie excist in database
        if ((data.Response = "true")) {
          result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title} </h2>
                    <div class="rating">
                    <img src="star-icon.svg">
                    <h4>${data.imdbRating} </h4>
                    </div>

                    <div class="details">
                        <span>${data.Rated} </span>
                    </div>
                </div>
            </div>
            `;
        }
      });
  }
};
