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
      return '<i class="fa-regular fa-sun"></i>';
    case 'few clouds':
      return '<i class="fa-solid fa-cloud-sun"></i>';
    case 'scattered clouds':
      return '<i class="fa-regular fa-cloud"></i>';
    case 'broken clouds':
      return '<i class="fa-regular fa-clouds"></i>'

    case 'shower rain':
      return '<i class="fa-solid fa-cloud-showers"></i>'

    case 'rain':
      return '<i class="fa-solid fa-cloud-rain"></i>'

    case 'thunderstorm':
      return '<i class="fa-solid fa-cloud-bolt"></i>'

    case 'snow':
      return '<i class="fa-light fa-cloud-snow"></i>'

    case 'mist':
      return '<i class="fa-solid fa-bars-staggered"></i>'

    
  }

}