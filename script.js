let movieName = "spiderman"
const form = document.getElementsByClassName('form')[0];
const moviesContainer = document.getElementsByClassName('movies')[0];
console.log(form)


const showMovies = (movies) => {
    console.log(movies)
    let html = movies.map(movie => {
        return `<div class="movie-card">
                <img src=${movie.Poster != "N/A" ? movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"} alt="spider-man">
                  <div class="des">
                  <p>Name : ${movie.Title}</p>
                  <p>Year : ${movie.Year}</p>
                  <p>Type :${movie.Type}</p>
                </div>
               </div>`;
    })

    moviesContainer.innerHTML = html.join("");
}

const fetchMovies = async(movieTitle) => {
    const res = await fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=66ec4406`);
    const data = await res.json();
    if(data.Search){
        // console.log(data.Search)
        showMovies(data.Search);
    }

    return data.Search;

}

fetchMovies(movieName);


form.addEventListener('submit' , async (e) => {
    e.preventDefault();
  const value = e.target.children[0].value;
//   console.log(value)
  const movies = fetchMovies(value);
  console.log(movies);
  showMovies(movies);
//   value = "";
this.reset()
});