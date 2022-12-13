//import * as utils from '..js/utilities'
import * as utils from '../js/utilities'

function displayCity(weatherInfo) {
  const cityName = document.getElementById('cityName');
  const searchField = document.getElementById('search')

  const city = weatherInfo.name;
  const country = weatherInfo.sys.country;

  cityName.innerHTML = `${city}, ${country}`;
  searchField.value = null;
  searchField.placeholder = searchField.placeholder;
}

function displayWeatherInfo(weatherInfo) {
  displayTemp(weatherInfo);

  displayMain(weatherInfo);
  displayFeelsLike(weatherInfo);
  displayHumidity(weatherInfo);
  displayWindSpeed(weatherInfo);
  
}

function displayTemp(weatherInfo) {
  const tempSection = document.querySelector('.temp-section');
  
  const temp = document.createElement('div');
  temp.classList.add('temp-display');

  temp.innerHTML = `
  <h1>${weatherInfo.main.temp}</h1>
  <span>&#8451;</span>
  `;

  tempSection.appendChild(temp);
}

/**
 * info-container feels-like
 *  // dom
 *  (icon)
 *  ((text) + (temp))
 * 
 */
function displayFeelsLike(weatherInfo) {
  console.log(weatherInfo);
  const container = document.querySelector('.feels-like');
  const iconContainer = document.createElement('div');
  iconContainer.innerHTML = utils.infoIcons('feels like');


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-text');
  const text = document.createElement('div');
  const temp = document.createElement('div');
  text.innerHTML = 'Feels Like';
  temp.innerHTML = `${weatherInfo.main.feels_like} <span>&#8451;</span>`;

  infoContainer.appendChild(text);
  infoContainer.appendChild(temp);


  container.appendChild(iconContainer);
  container.appendChild(infoContainer);

}

function displayMain(weatherInfo) {
  const container = document.querySelector('.main');
  const iconContainer = document.createElement('div');
  iconContainer.innerHTML = utils.weatherIcons(weatherInfo.weather[0].main.toLowerCase());


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-text');
  const text = document.createElement('div');
  text.innerHTML = weatherInfo.weather[0].main;

  infoContainer.appendChild(text);


  container.appendChild(iconContainer);
  container.appendChild(infoContainer);

}
function displayHumidity(weatherInfo) {
  const container = document.querySelector('.humidity');
  const iconContainer = document.createElement('div');
  iconContainer.innerHTML = utils.infoIcons('humidity');


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-text');
  const text = document.createElement('div');
  const temp = document.createElement('div');
  text.innerHTML = 'Humidity';
  temp.innerHTML = `${weatherInfo.main.humidity} %`;

  infoContainer.appendChild(text);
  infoContainer.appendChild(temp);


  container.appendChild(iconContainer);
  container.appendChild(infoContainer);
}

function displayWindSpeed(weatherInfo) {
  const container = document.querySelector('.wind-speed');
  const iconContainer = document.createElement('div');
  iconContainer.innerHTML = utils.infoIcons('wind speed');


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-text');
  const text = document.createElement('div');
  const temp = document.createElement('div');
  text.innerHTML = 'Wind Speed';
  temp.innerHTML = `${weatherInfo.wind.speed} km/h`;

  infoContainer.appendChild(text);
  infoContainer.appendChild(temp);


  container.appendChild(iconContainer);
  container.appendChild(infoContainer);
}

function clearPage() {
  const cityName = document.getElementById('cityName');
  cityName.innerHTML = '';

  const tempSection = document.querySelector('.temp-section');
  tempSection.innerHTML = '';

  const mainContainer = document.querySelector('.main');
  mainContainer.innerHTML = '';

  const feelsLikeContainer = document.querySelector('.feels-like');
  feelsLikeContainer.innerHTML = '';

  const windSpeedContainer = document.querySelector('.wind-speed');
  windSpeedContainer.innerHTML = '';

  const humidityContainer = document.querySelector('.humidity');
  humidityContainer.innerHTML = '';

}

export {
  displayCity,
  displayWeatherInfo,
  clearPage
}

  
  