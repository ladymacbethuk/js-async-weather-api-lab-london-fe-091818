const API_KEY = "114689e6ae9f35cb42a661727b783a3d"


function handleFormSubmit(event) {
  //handle submit event
  let x = document.getElementById("city").value;
  x.innerHTML;
  console.log(x);
   }



function fetchCurrentWeather(city) {
  //fetch current weather based on city
  document.getElementById("submit").addEventListener("click", )
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=london&APPID=114689e6ae9f35cb42a661727b783a3d');
  // .then(response => response.json());
  // .then(json => console.log(json));
  //displayCurrentWeather();
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  document.getElementById("temp").innerHTML = '';
  document.getElementById("low").innerHTML = '';
  document.getElementById("high").innerHTML = '';
  document.getElementById("humidity").innerHTML = '';
  document.getElementById("cloudCover").innerHTML = '';
  document.getElementById("sunrise").innerHTML = '';
  document.getElementById("sunset").innerHTML = '';
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
})
