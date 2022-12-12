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
  const tempSection = document.querySelector('.temp-section');
  
  const temp = document.createElement('div');
  temp.classList.add('temp-display');

  temp.innerHTML = `
  <h1>${weatherInfo.main.temp}</h1>
  <span>&#8451;</span>
  `;

  tempSection.appendChild(temp);
  
}

function clearPage() {
  const cityName = document.getElementById('cityName');
  cityName.innerHTML = '';
  const tempSection = document.querySelector('.temp-section');
  tempSection.innerHTML = '';
  
}

export {
  displayCity,
  displayWeatherInfo,
  clearPage
}

  
  