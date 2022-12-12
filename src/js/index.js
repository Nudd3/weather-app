import '../styles/main.scss'
import * as apiFunctions from '../js/api-functions'
import * as domFunctions from '../js/dom-functions'

const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('click', () => {
  displayInfo();
});

async function displayInfo() {
  domFunctions.clearPage();
  // Collect Data
  const city = apiFunctions.collectDataFromForm();
  const coords = await apiFunctions.getCoords(city);
  const weatherInfo = await apiFunctions.getWeather(coords.lat, coords.lon);
  
  // Display City Info
  domFunctions.displayCity(weatherInfo);
  // console.log(weatherInfo);
  
  // Display Weather Info
  domFunctions.displayWeatherInfo(weatherInfo);

}

// main: feels like/humidity/temp
// weather: main/description


// Initial Loadup -> New York
async function initialLoad() {
  const coords = await apiFunctions.getCoords('New York');
  const weatherInfo = await apiFunctions.getWeather(coords.lat, coords.lon);
  domFunctions.displayCity(weatherInfo);
  domFunctions.displayWeatherInfo(weatherInfo);
}

initialLoad();
