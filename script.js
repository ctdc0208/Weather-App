async function getWeatherLocation() {
  const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid={c205a33f23c3e0dd3c6166231519e456}');
  const weatherData = await weather.json();
  console.log(weatherData);
}

getWeatherLocation();
