const apiKey = "6d07a2e569fd15380570cc8e1e58a515";

const inputCity = document.querySelector('#input-city');
const btnSearch = document.querySelector('#input-search');

const cityElement = document.querySelector('#location');
const tempElement = document.querySelector('#temperature');
const dataTimeElement = document.querySelector('#date-time');
const weatherImageElement = document.querySelector('#weather-image');
const umidityElement = document.querySelector('#umidity');
const windElement = document.querySelector('#wind');

// functions
const showWeatherData = (city) => {
   console.log(city);
}

//events
btnSearch.addEventListener('click', (e) => {
   e.preventDefault();

   const city = inputCity.value;

   showWeatherData(city);
})