
// get cityName by a search input
function getCityName() {
  const input = document.querySelector('.search-location-input');
  const cityName = input.value;

  if (cityName) {
    return cityName;
  }
  return '';
}

let changeUnit = false;
let lastCity = 'Manila';

async function getWeatherData(unit, unitTemp, unitSpeed, initialLoad = false) {

  try {
    let cityName;
    document.querySelector('.search-location-error').style.visibility = "hidden";
    // default weather location on initial load
    if (initialLoad) {
      cityName = 'Manila';
    } else {
      // if not initial load, get relevent weather data
      cityName = getCityName();
    }

    // if no name entered, exit function
    if (!cityName) {
      return;
    }

    if (changeUnit) {
      cityName = lastCity;
    };

    lastCity = cityName;

    changeUnit = false;

    // API for Astronomical API (Latitude and Longitude, Time)
      const weatherAstronomical = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=c205a33f23c3e0dd3c6166231519e456`);
      const weatherAstronomicalData = await weatherAstronomical.json();
    // get lat and lon for daily API
      const latitude = weatherAstronomicalData.coord.lat;
      const longitude = weatherAstronomicalData.coord.lon;
  
    // one call daily weather data
      const weatherDaily7days = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&exclude=hourly,minutely&APPID=c205a33f23c3e0dd3c6166231519e456`);
      const weatherDataDaily7days = await weatherDaily7days.json();
      console.log(weatherDataDaily7days)
      
      const iconUrlArray = [];

      for (let i = 0; i < 7; i++) {
        const iconCode = weatherDataDaily7days.daily[i].weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        iconUrlArray.push(iconUrl);
      }


      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayNamesArray = [];

      for (let i = 0; i < 7; i++) {
        const day = new Date(weatherDataDaily7days.daily[i].dt * 1000);
        const dayOfWeek = day.getDay();
        const dayName = dayNames[dayOfWeek];
        dayNamesArray.push(dayName);
      }

      const date = new Date(weatherDataDaily7days.current.dt * 1000);
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      
      const currentDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
      const currentTime = date.toLocaleTimeString();

      // upper right contents
      document.querySelector('.name').textContent = weatherAstronomicalData.name;
      document.querySelector('.country').textContent = weatherAstronomicalData.sys.country;
      document.querySelector('.date').textContent = currentDate;
      document.querySelector('.day').textContent = dayNamesArray[0];
      document.querySelector('.time').textContent = currentTime;
      document.getElementById('current-cloud').src = iconUrlArray[0]
      document.querySelector('.clouds').textContent = weatherDataDaily7days.current.weather[0].description;
      document.querySelector('.temp').textContent = weatherDataDaily7days.current.temp + `${unitTemp}`;

      // upper left contents
      document.querySelector('.feels_like').textContent = 'Feels Like : ' + weatherDataDaily7days.current.feels_like + `${unitTemp}`;
      document.querySelector('.humidity').textContent = 'Humidity : ' + weatherDataDaily7days.current.humidity + ' %';
      document.querySelector('.wind').textContent = 'Wind Speed : ' + weatherDataDaily7days.current.wind_speed + `${unitSpeed}`;

      // bottom contents
      document.querySelector('.daily_1_day').textContent = dayNamesArray[1];
      document.querySelector('.daily_1_high_temp').textContent = weatherDataDaily7days.daily[1].temp.max + `${unitTemp}`;
      document.querySelector('.daily_1_low_temp').textContent = weatherDataDaily7days.daily[1].temp.min + `${unitTemp}`;
      document.getElementById('daily_1_clouds').src = iconUrlArray[1]

      document.querySelector('.daily_2_day').textContent = dayNamesArray[2];
      document.querySelector('.daily_2_high_temp').textContent = weatherDataDaily7days.daily[2].temp.max + `${unitTemp}`;
      document.querySelector('.daily_2_low_temp').textContent = weatherDataDaily7days.daily[2].temp.min + `${unitTemp}`;
      document.getElementById('daily_2_clouds').src = iconUrlArray[2]

      document.querySelector('.daily_3_day').textContent = dayNamesArray[3];
      document.querySelector('.daily_3_high_temp').textContent = weatherDataDaily7days.daily[3].temp.max + `${unitTemp}`;
      document.querySelector('.daily_3_low_temp').textContent = weatherDataDaily7days.daily[3].temp.min + `${unitTemp}`;
      document.getElementById('daily_3_clouds').src = iconUrlArray[3]

      document.querySelector('.daily_4_day').textContent = dayNamesArray[4];
      document.querySelector('.daily_4_high_temp').textContent = weatherDataDaily7days.daily[4].temp.max + `${unitTemp}`;
      document.querySelector('.daily_4_low_temp').textContent = weatherDataDaily7days.daily[4].temp.min + `${unitTemp}`;
      document.getElementById('daily_4_clouds').src = iconUrlArray[4]

      document.querySelector('.daily_5_day').textContent = dayNamesArray[5];
      document.querySelector('.daily_5_high_temp').textContent = weatherDataDaily7days.daily[5].temp.max + `${unitTemp}`;
      document.querySelector('.daily_5_low_temp').textContent = weatherDataDaily7days.daily[5].temp.min + `${unitTemp}`;
      document.getElementById('daily_5_clouds').src = iconUrlArray[5]

      document.querySelector('.daily_6_day').textContent = dayNamesArray[6];
      document.querySelector('.daily_6_high_temp').textContent = weatherDataDaily7days.daily[6].temp.max + `${unitTemp}`;
      document.querySelector('.daily_6_low_temp').textContent = weatherDataDaily7days.daily[6].temp.min + `${unitTemp}`;
      document.getElementById('daily_6_clouds').src = iconUrlArray[6]

  } catch (err) {
    // error searching location message
    document.querySelector('.search-location-error').style.visibility = 'visible';
  }
  // clear search box input
  document.querySelector('.search-location-input').value = '';
  //  return unit for new location data
  return `${unit}`;
};

// for search location button
document.querySelector('.search-location-button').addEventListener('click', () => {
  changeUnit = false;
  getWeatherData(unit);
});

// for search location input and "enter" for submission
document.querySelector('.search-location-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    changeUnit = false;
    if (unit = "metric") {
    getWeatherData(unit = "metric", unitTemp = ' °C', unitSpeed = ' km/h');
  } if (unit = "imperial"){
    getWeatherData(unit = "imperial", unitTemp = ' °F', unitSpeed = ' mpa');
    }
  }
});

// metric change button
document.querySelector('.unit-metric').addEventListener('click', async() => {
  unit = 'metric';
  unitTemp = ' °C';
  unitSpeed = ' km/h';
  changeUnit = true;
  await getWeatherData(unit, unitTemp, unitSpeed, true);

  return unit;
});

// imperial change button
document.querySelector('.unit-imperial').addEventListener('click', async() => {
  unit = 'imperial';
  unitTemp = ' °F';
  unitSpeed = ' mph';
  changeUnit = true;
  await getWeatherData(unit, unitTemp, unitSpeed,true);

  return unit;
});


// initialLoad
getWeatherData(unit = "metric", unitTemp = ' °C', unitSpeed = ' km/h', true);