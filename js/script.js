const apiKey = "6d07a2e569fd15380570cc8e1e58a515";

const inputCity = document.querySelector('#input-city');
const btnSearch = document.querySelector('#input-search');

const cityElement = document.querySelector('#location');
const countryElement = document.querySelector('#country')
const tempElement = document.querySelector('#temp');
const dataTimeElement = document.querySelector('#date-time');
const weatherImageElement = document.querySelector('#weather-image');
const humidityElement = document.querySelector('#humidity');
const windElement = document.querySelector('#wind');

// functions
const getWeatherData = async(city) => {
   const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt-br`;

   const res = await fetch(apiWeatherURL);
   const data = await res.json();

   console.log(data)
   return data;
}

const showWeatherData = async (city) => {
   const data = await getWeatherData(city);

   cityElement.innerText = data.name;
   countryElement.innerText = data.sys.country;
   tempElement.innerText = data.main.temp;
   humidityElement.innerText = data.main.humidity;
   windElement.innerText = data.wind.speed;

}

//events
btnSearch.addEventListener('click', (e) => {
   e.preventDefault();

   const city = inputCity.value;

   showWeatherData(city);
})