// What needs to be done?
// Call two different apis
// First one to get coordinates to a specific city
// Second one to get the weather from that city
function collectDataFromForm() {
  const inputField = document.getElementById('input-field');
  const cityName = inputField.value;
  // Clear up input from empty spaces/symbols

  return cityName;
}

async function getCoords(city) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=41be00f526a0aecf69af7a7fd13a78d9`
  const response = await fetch(url, {mode: 'cors'});
  const data = await response.json();
  //const coord = data[0];
  const coord = {
    lat: data[0].lat,
    lon: data[0].lon
  };
  
  return coord;
}

async function getWeather(lat, lon) {
  const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=41be00f526a0aecf69af7a7fd13a78d9`;
  //const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=41be00f526a0aecf69af7a7fd13a78d9`;
  const cityRequest = await fetch(url, {mode: 'cors'});
  const city = await cityRequest.json();
  console.log(city);
}

async function use(city) {
  const coords = await getCoords(city);
  const weather = await (getWeather(coords.lat, coords.lon));
  console.log(weather);
}

export { 
  getCoords,
  getWeather,
  use,
};