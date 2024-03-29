const apiKey = "708d468beaa0cfd60c61970bf58c577c";

const inputCity = document.querySelector("#input-city");
const btnSearch = document.querySelector("#input-search");
const hiddenElements = document.querySelector("#weather-elements");
const errorMessage = document.querySelector("#error-message");

const cityElement = document.querySelector("#location");
const descriptionElement = document.querySelector("#description");
const countryElement = document.querySelector("#country");
const tempElement = document.querySelector("#temp");
const weatherImageElement = document.querySelector("#weather-image");
const humidityElement = document.querySelector("#humidity");
const windElement = document.querySelector("#wind");

// functions
const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt-br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
};

const getWeatherCondition = async (city) => {
  const data = await getWeatherData(city);
  const dataWeather = data.weather[0].main;

  if (dataWeather == "Clouds") {
    weatherImageElement.setAttribute("src", "./assets/images/clouds.png");
    document.body.style.backgroundImage = "url('./assets/images/cloudy.jpg')";
  } else if (dataWeather == "Rain") {
    weatherImageElement.setAttribute("src", "./assets/images/rain.png");
    document.body.style.backgroundImage = "url('./assets/images/rain.jpg')";
  } else if (dataWeather == "Clear") {
    weatherImageElement.setAttribute("src", "./assets/images/moon.png");
    document.body.style.backgroundImage = "url('./assets/images/clear.jpg')";
  } else if (dataWeather == "Snow") {
    weatherImageElement.setAttribute("src", "./assets/images/snow.png");
    document.body.style.backgroundImage = "url('./assets/images/snow.jpg')";
  } else if (dataWeather == "haze") {
    weatherImageElement.setAttribute("src", "./assets/images/haze.png");
    document.body.style.backgroundImage = "url('./assets/images/cloudy.jpg')";
  }
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  descriptionElement.innerText = data.weather[0].description;
  countryElement.innerText = data.sys.country;
  tempElement.innerText = parseInt(data.main.temp);
  humidityElement.innerText = data.main.humidity;
  windElement.innerText = data.wind.speed;

  getWeatherCondition(city);
};

const main = async (city) => {
  const data = await getWeatherData(city);

  if (data.cod === "404") {
     errorMessage.classList.add("active")
   setTimeout(()=> {
      errorMessage.classList.remove("active")
   }, 4000)
  } else {
    showWeatherData(city);
   hiddenElements.classList.add("d-block")
  }
};

//events
btnSearch.addEventListener("click", (e) => {
  e.preventDefault();

  const city = inputCity.value;

  main(city);
});

inputCity.addEventListener("keyup", (e) => {
  const key = e.which || e.keyCode;

  if (key == 13) {
    const city = inputCity.value;
    main(city);
  }
});
