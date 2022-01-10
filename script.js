/*
const nameCountry = document.querySelector('.name_country');
const dateTime = document.querySelector('.date_time');
const temp = document.querySelector('.temp');
const unit = document.querySelector('.unit');
const clouds = document.querySelector('.clouds');
const feelsLike = document.querySelector('.feels_like');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');




async function getWeatherLocation() {
/*
  const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Manila&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherData = await weather.json();
  temp.textContent = weatherData.main.temp;

  console.log(weatherData);
*/
/*
  const weatherMetric = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherDataMetric = await weatherMetric.json();


// API for Astronomical API (Latitude and Longitude, Time)
  const weatherAstronomical = await fetch('https://api.ipgeolocation.io/astronomy?apiKey=b501d43a8ae843deb4959fbbd33fc521&location=Manila');
  const weatherAstronomicalData = await weatherAstronomical.json();


  nameCountry.textContent = weatherDataMetric.name;
  dateTime.textContent = weatherAstronomicalData.date + ' ' + weatherAstronomicalData.current_time;
  temp.textContent = weatherDataMetric.main.temp;
  unit.textContent = "Metric";
  clouds.textContent = weatherDataMetric.weather[0].description;
  feelsLike.textContent = weatherDataMetric.main.feels_like;
  humidity.textContent = weatherDataMetric.main.humidity;
  wind.textContent = weatherDataMetric.wind.speed;

  console.log(weatherDataMetric);

/*
  const weatherImperial = await fetch('http://api.openweathermap.org/data/2.5/find?q=Manila&units=Imperial&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherDataImperial = await weatherImperial.json();
  console.log(weatherDataImperial);

  const weatherDaily7days = await fetch('http://api.openweathermap.org/data/2.5/onecall?lat=41.3558443&lon=-74.00776718841271&units=metric&exclude=hourly,minutely&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherDataDaily7days = await weatherDaily7days.json();
  console.log(weatherDataDaily7days);
*/


}
/*
getWeatherLocation();
*/
