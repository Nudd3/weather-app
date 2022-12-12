/** Different Weather Mains **/
// clear sky 
// few clouds 
// scattered clouds 
// broken clouds 
// shower rain 
// rain 
// thunderstorm 
// snow 
// mist
function weatherIcons(weather) {

  switch(weather) {
    case 'clear sky':
      return '<i class="fa-regular fa-sun fa-4x"></i>';
    case 'clouds':
      return '<i class="fa-solid fa-cloud-sun fa-5x"></i>';
    case 'scattered clouds':
      return '<i class="fa-regular fa-cloud fa-5x"></i>';
    case 'broken clouds':
      return '<i class="fa-regular fa-clouds fa-5x"></i>'

    case 'shower rain':
      return '<i class="fa-solid fa-cloud-showers fa-5x"></i>'

    case 'rain':
      return '<i class="fa-solid fa-cloud-rain fa-5x"></i>'

    case 'thunderstorm':
      return '<i class="fa-solid fa-cloud-bolt fa-5x"></i>'

    case 'snow':
      return '<i class="fa-light fa-cloud-snow fa-5x"></i>'

    case 'mist':
      return '<i class="fa-solid fa-bars-staggered fa-5x"></i>'
  }
}

function infoIcons(info) {
  switch(info) {
    case 'feels like': 
      return '<i class="fa-solid fa-temperature-quarter fa-5x"></i>'
    case 'humidity':
      return '<i class="fa-solid fa-water fa-5x"></i>'
    case 'wind speed': 
      return '<i class="fa-solid fa-wind fa-5x"></i>'
  } 
}

export {
  weatherIcons,
  infoIcons
}