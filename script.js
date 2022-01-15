
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
    // for date
      const getDate = await fetch(`https://api.ipgeolocation.io/astronomy?apiKey=b501d43a8ae843deb4959fbbd33fc521&location=${cityName}`);
      const getDateDate = await getDate.json();
    // one call daily weather data
      const weatherDaily7days = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&exclude=hourly,minutely&APPID=c205a33f23c3e0dd3c6166231519e456`);
      const weatherDataDaily7days = await weatherDaily7days.json();
      console.log(weatherDataDaily7days);

      // upper right contents
      document.querySelector('.name').textContent = weatherAstronomicalData.name;
      document.querySelector('.country').textContent = weatherAstronomicalData.sys.country;
      document.querySelector('.date_time').textContent = getDateDate.date + ' ' + getDateDate.current_time;
      document.querySelector('.clouds').textContent = weatherDataDaily7days.current.weather[0].description;
      document.querySelector('.temp').textContent = weatherDataDaily7days.current.temp + `${unitTemp}`;

      // upper left contents
      document.querySelector('.feels_like').textContent = 'Feels Like : ' + weatherDataDaily7days.current.feels_like + `${unitTemp}`;
      document.querySelector('.humidity').textContent = 'Humidity : ' + weatherDataDaily7days.current.humidity + ' %';
      document.querySelector('.wind').textContent = 'Wind Speed : ' + weatherDataDaily7days.current.wind_speed + `${unitSpeed}`;

      // bottom contents
      document.querySelector('.daily_0_day').textContent = "0 day";
      document.querySelector('.daily_0_high_temp').textContent = weatherDataDaily7days.daily[0].temp.max + `${unitTemp}`;
      document.querySelector('.daily_0_low_temp').textContent = weatherDataDaily7days.daily[0].temp.min + `${unitTemp}`;
      document.querySelector('.daily_0_clouds').textContent = weatherDataDaily7days.daily[0].weather[0].description;

      document.querySelector('.daily_1_day').textContent = "1 day";
      document.querySelector('.daily_1_high_temp').textContent = weatherDataDaily7days.daily[1].temp.max + `${unitTemp}`;
      document.querySelector('.daily_1_low_temp').textContent = weatherDataDaily7days.daily[1].temp.min + `${unitTemp}`;
      document.querySelector('.daily_1_clouds').textContent = weatherDataDaily7days.daily[1].weather[0].description;

      document.querySelector('.daily_2_day').textContent = "2 day";
      document.querySelector('.daily_2_high_temp').textContent = weatherDataDaily7days.daily[2].temp.max + `${unitTemp}`;
      document.querySelector('.daily_2_low_temp').textContent = weatherDataDaily7days.daily[2].temp.min + `${unitTemp}`;
      document.querySelector('.daily_2_clouds').textContent = weatherDataDaily7days.daily[2].weather[0].description;

      document.querySelector('.daily_3_day').textContent = "3 day";
      document.querySelector('.daily_3_high_temp').textContent = weatherDataDaily7days.daily[3].temp.max + `${unitTemp}`;
      document.querySelector('.daily_3_low_temp').textContent = weatherDataDaily7days.daily[3].temp.min + `${unitTemp}`;
      document.querySelector('.daily_3_clouds').textContent = weatherDataDaily7days.daily[3].weather[0].description;

      document.querySelector('.daily_4_day').textContent = "4 day";
      document.querySelector('.daily_4_high_temp').textContent = weatherDataDaily7days.daily[4].temp.max + `${unitTemp}`;
      document.querySelector('.daily_4_low_temp').textContent = weatherDataDaily7days.daily[4].temp.min + `${unitTemp}`;
      document.querySelector('.daily_4_clouds').textContent = weatherDataDaily7days.daily[4].weather[0].description;

      document.querySelector('.daily_5_day').textContent = "5 day";
      document.querySelector('.daily_5_high_temp').textContent = weatherDataDaily7days.daily[5].temp.max + `${unitTemp}`;
      document.querySelector('.daily_5_low_temp').textContent = weatherDataDaily7days.daily[5].temp.min + `${unitTemp}`;
      document.querySelector('.daily_5_clouds').textContent = weatherDataDaily7days.daily[5].weather[0].description;

      document.querySelector('.daily_6_day').textContent = "6 day";
      document.querySelector('.daily_6_high_temp').textContent = weatherDataDaily7days.daily[6].temp.max + `${unitTemp}`;
      document.querySelector('.daily_6_low_temp').textContent = weatherDataDaily7days.daily[6].temp.min + `${unitTemp}`;
      document.querySelector('.daily_6_clouds').textContent = weatherDataDaily7days.daily[6].weather[0].description;

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

  console.log(unit);
  return unit;
});

// imperial change button
document.querySelector('.unit-imperial').addEventListener('click', async() => {
  unit = 'imperial';
  unitTemp = ' °F';
  unitSpeed = ' mph';
  changeUnit = true;
  await getWeatherData(unit, unitTemp, unitSpeed,true);

  console.log(unit);
  return unit;
});


// initialLoad
getWeatherData(unit = "metric", unitTemp = ' °C', unitSpeed = ' km/h', true);
