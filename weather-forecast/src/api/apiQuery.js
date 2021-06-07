import axios from 'axios';

const key = `72a8e0566e40b16f5aa65595512e9983`;

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/"
});

export async function apiQuery(city) {
  const urlToGetCoords = `/weather?q=${city}&appid=${key}`;
  const {lon, lat} = (await instance.get(urlToGetCoords)).data.coord;
  const urlToGetForecast = `/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

  return await instance.get(urlToGetForecast);
}
