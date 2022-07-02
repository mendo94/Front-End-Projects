//API KEY 65d1c2b7d95f254a3bb92e71cc84f919
const displayWeatherTemps = document.getElementById("displayWeatherTemps");
const apiKey = "65d1c2b7d95f254a3bb92e71cc84f919";
const citySearchTextBox = document.getElementById("citySearch");
const searchBtn = document.getElementById("searchBtn");

const locationBtn = document.getElementById("location");
const displayWeatherByLocation = document.getElementById(
  "displayWeatherByLocation"
);

searchBtn.addEventListener("click", function () {
  getWeather(displayWeather);
});

function getWeather(displayWeatherCallback) {
  let city = citySearchTextBox.value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (weather) {
      console.log(weather);
      displayWeatherCallback(weather);
    });
}

function displayWeather(weather) {
  let weatherItems = `
  <div class="container">
  <h2>You're currently viewing the weather for:</h2>
  <span>${weather.name}</span>
  <h4>Today's High:</h4>
    <p>${weather.main.temp}ºF</p>
    <h4>Today's Low</h4>
    <p>${weather.main.temp_min}ºF</p>
    <h4>The Pressure Is</h4>
    <p>${weather.main.pressure} psi</p>
    <div>`;

  displayWeatherTemps.innerHTML = weatherItems;
}

locationBtn.addEventListener("click", function () {
  getPosSuccess(pos);
});

//More complete version
if (navigator.geolocation) {
  // Request the current position
  // If successful, call getPosSuccess; On error, call getPosErr
  navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
} else {
  alert("geolocation not available?! What year is this?");
  // IP address or prompt for city?
}

// getCurrentPosition: Successful return
function getPosSuccess(pos) {
  // Get the coordinates and accuracy properties from the returned object
  var geoLat = pos.coords.latitude.toFixed(5);
  var geoLng = pos.coords.longitude.toFixed(5);
  var geoAcc = pos.coords.accuracy.toFixed(1);
  // console.log(geoLat, geoLng, geoAcc);
}

// getCurrentPosition: Error returned
function getPosErr(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case err.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case err.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
  }
}
