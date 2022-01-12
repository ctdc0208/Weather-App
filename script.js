// upper right content div's
const nameCountry = document.querySelector('.name_country');
const dateTime = document.querySelector('.date_time');
const clouds = document.querySelector('.clouds');
const temp = document.querySelector('.temp');
const unit = document.querySelector('.unit');

// upper left content div's
const feelsLike = document.querySelector('.feels_like');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

// bottom content div's
const daily_0_day = document.querySelector('.daily_0_day');
const daily_0_high_temp = document.querySelector('.daily_0_high_temp');
const daily_0_low_temp = document.querySelector('.daily_0_low_temp');
const daily_0_clouds = document.querySelector('.daily_0_clouds');

const daily_1_day = document.querySelector('.daily_1_day');
const daily_1_high_temp = document.querySelector('.daily_1_high_temp');
const daily_1_low_temp = document.querySelector('.daily_1_low_temp');
const daily_1_clouds = document.querySelector('.daily_1_clouds');

const daily_2_day = document.querySelector('.daily_2_day');
const daily_2_high_temp = document.querySelector('.daily_2_high_temp');
const daily_2_low_temp = document.querySelector('.daily_2_low_temp');
const daily_2_clouds = document.querySelector('.daily_2_clouds');

const daily_3_day = document.querySelector('.daily_3_day');
const daily_3_high_temp = document.querySelector('.daily_3_high_temp');
const daily_3_low_temp = document.querySelector('.daily_3_low_temp');
const daily_3_clouds = document.querySelector('.daily_3_clouds');

const daily_4_day = document.querySelector('.daily_4_day');
const daily_4_high_temp = document.querySelector('.daily_4_high_temp');
const daily_4_low_temp = document.querySelector('.daily_4_low_temp');
const daily_4_clouds = document.querySelector('.daily_4_clouds');

const daily_5_day = document.querySelector('.daily_5_day');
const daily_5_high_temp = document.querySelector('.daily_5_high_temp');
const daily_5_low_temp = document.querySelector('.daily_5_low_temp');
const daily_5_clouds = document.querySelector('.daily_5_clouds');

const daily_6_day = document.querySelector('.daily_6_day');
const daily_6_high_temp = document.querySelector('.daily_6_high_temp');
const daily_6_low_temp = document.querySelector('.daily_6_low_temp');
const daily_6_clouds = document.querySelector('.daily_6_clouds');

let cityName = 'Manila';

/*
function getCityName() {
  const input = document.querySelector('.search-location-input');
  const cityName = input.value;

  if (cityName) {
    return cityName;
  }
  return '';
}

async function buildUrlCoordinates(cityName) {
  const buildFromName = await fetch(urlName);
  const buildFromNameData = await buildFromName.json();

  const latitude = buildFromNameData.coord.lat;
  const longitude = buildFromNameData.coord.lon;

  buildUrlDaily(latitude, longitude);
}

function buildUrlDaily(latitude, longitude) {
  return `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}=&lon=${longitude}&units=metric&exclude=hourly,minutely&APPID=c205a33f23c3e0dd3c6166231519e456`;
}
*/
async function getWeatherLocation() {
/*
  const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Manila&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherData = await weather.json();
  temp.textContent = weatherData.main.temp;

  console.log(weatherData);

  const weatherMetric = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherDataMetric = await weatherMetric.json();

*/


// API for Astronomical API (Latitude and Longitude, Time)
  const weatherAstronomical = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=c205a33f23c3e0dd3c6166231519e456`);
  const weatherAstronomicalData = await weatherAstronomical.json();

  const latitude = weatherAstronomicalData.coord.lat;
  const longitude = weatherAstronomicalData.coord.lon;

  const getDate = await fetch(`https://api.ipgeolocation.io/astronomy?apiKey=b501d43a8ae843deb4959fbbd33fc521&location=${cityName}`);
  const getDateDate = await getDate.json();

/*
  const weatherImperial = await fetch('http://api.openweathermap.org/data/2.5/find?q=Manila&units=Imperial&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherDataImperial = await weatherImperial.json();
  console.log(weatherDataImperial);
*/

  const weatherDaily7days = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&APPID=c205a33f23c3e0dd3c6166231519e456`);
  const weatherDataDaily7days = await weatherDaily7days.json();
  console.log(weatherDataDaily7days);

  // upper right contents
  nameCountry.textContent = weatherAstronomicalData.name;
  dateTime.textContent = getDateDate.date + ' ' + getDateDate.current_time;
  clouds.textContent = weatherDataDaily7days.current.weather[0].description;
  temp.textContent = weatherDataDaily7days.current.temp + ' °C' ;
  // unit

  // upper left contents
  feelsLike.textContent = 'Feels Like : ' + weatherDataDaily7days.current.feels_like + ' °C';
  humidity.textContent = 'Humidity : ' + weatherDataDaily7days.current.humidity + ' %';
  wind.textContent = 'Wind Speed : ' + weatherDataDaily7days.current.wind_speed + ' km/h';

  // bottom contents
  daily_0_day.textContent = "0 day";
  daily_0_high_temp.textContent = weatherDataDaily7days.daily[0].temp.max + ' °C';
  daily_0_low_temp.textContent = weatherDataDaily7days.daily[0].temp.min + ' °C';
  daily_0_clouds.textContent = weatherDataDaily7days.daily[0].weather[0].description;

  daily_1_day.textContent = "1 day";
  daily_1_high_temp.textContent = weatherDataDaily7days.daily[1].temp.max + ' °C';
  daily_1_low_temp.textContent = weatherDataDaily7days.daily[1].temp.min + ' °C';
  daily_1_clouds.textContent = weatherDataDaily7days.daily[1].weather[0].description;

  daily_2_day.textContent = "2 day";
  daily_2_high_temp.textContent = weatherDataDaily7days.daily[2].temp.max + ' °C';
  daily_2_low_temp.textContent = weatherDataDaily7days.daily[2].temp.min + ' °C';
  daily_2_clouds.textContent = weatherDataDaily7days.daily[2].weather[0].description;

  daily_3_day.textContent = "3 day";
  daily_3_high_temp.textContent = weatherDataDaily7days.daily[3].temp.max + ' °C';
  daily_3_low_temp.textContent = weatherDataDaily7days.daily[3].temp.min + ' °C';
  daily_3_clouds.textContent = weatherDataDaily7days.daily[3].weather[0].description;

  daily_4_day.textContent = "4 day";
  daily_4_high_temp.textContent = weatherDataDaily7days.daily[4].temp.max + ' °C';
  daily_4_low_temp.textContent = weatherDataDaily7days.daily[4].temp.min + ' °C';
  daily_4_clouds.textContent = weatherDataDaily7days.daily[4].weather[0].description;

  daily_5_day.textContent = "5 day";
  daily_5_high_temp.textContent = weatherDataDaily7days.daily[5].temp.max + ' °C';
  daily_5_low_temp.textContent = weatherDataDaily7days.daily[5].temp.min + ' °C';
  daily_5_clouds.textContent = weatherDataDaily7days.daily[5].weather[0].description;

  daily_6_day.textContent = "6 day";
  daily_6_high_temp.textContent = weatherDataDaily7days.daily[6].temp.max + ' °C';
  daily_6_low_temp.textContent = weatherDataDaily7days.daily[6].temp.min + ' °C';
  daily_6_clouds.textContent = weatherDataDaily7days.daily[6].weather[0].description;
}

getWeatherLocation();
