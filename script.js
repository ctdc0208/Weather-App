async function getWeatherLocation() {
  const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Manila&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherData = await weather.json();
  console.log(weatherData);

  const weatherMetric = await fetch('http://api.openweathermap.org/data/2.5/find?q=Manila&units=metric&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherDataMetric = await weatherMetric.json();
  console.log(weatherDataMetric);

  const weatherImperial = await fetch('http://api.openweathermap.org/data/2.5/find?q=Manila&units=Imperial&APPID=c205a33f23c3e0dd3c6166231519e456');
  const weatherDataImperial = await weatherImperial.json();
  console.log(weatherDataImperial);
}

getWeatherLocation();
