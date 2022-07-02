//http://www.omdbapi.com/?s=batman&apikey=1e24024d

//API KEY = 1e24024d
//https://www.omdbapi.com/?t=batman+begins&apikey=1e24024d

const superheroHeading = document.getElementById('superheroHeading');
const movieDetails = document.getElementById('movieDetails');


let request = new XMLHttpRequest()
request.open('GET', "http://www.omdbapi.com/?s=batman&apikey=1e24024d")

function movieLinks(imdbID) {
  let newRequest = new XMLHttpRequest()
  let url = `https://www.omdbapi.com/?i=${imdbID}&apikey=1e24024d`
  newRequest.open("GET", url)
  
  newRequest.addEventListener("load", function () {
    
    let newResult = JSON.parse(this.responseText)
    let detailItems = `<ul>
    <li>${newResult.Title}</li>
    <li>Year: ${newResult.Year}</li>
    <li>Rated: ${newResult.Rated}</li>
    <li>Released: ${newResult.Released}</li>
    <li>Director: ${newResult.Director}</li>
    <img src="${newResult.Poster}"></img>
    </ul>`
    movieDetails.innerHTML = detailItems
  })
  newRequest.send()
}

request.addEventListener('load', function () {

  let result = JSON.parse(this.responseText)

  let movieItems = result.Search.map(function (movie) {
    return `<div class="container">
      <ul>
      <img src="${movie.Poster}"></img>
      <li><a movieLink = "${movie.imdbID}" id="links" href='#movieDetails' OnClick="movieLinks('${movie.imdbID}')">${movie.Title}</a></li> 
      </ul>
    </div>`
  })

  superheroHeading.innerHTML = movieItems.join("")
})


request.send()