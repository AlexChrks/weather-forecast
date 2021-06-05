const axios = require('axios').default;

export function apiQuery(city) {
  const key = `72a8e0566e40b16f5aa65595512e9983`;
  const urlToGetCoords = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  return new Promise((resolve, reject) => {
    axios
    .get(urlToGetCoords)
    .then((response) => {
      const {lon, lat} = response.data.coord;
      const urlToGetForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;
      axios
      .get(urlToGetForecast)
      .then((response) => {
          resolve(response);
        });
      })
    .catch((e) => {
      reject('invalid city')
    });
  })
}
