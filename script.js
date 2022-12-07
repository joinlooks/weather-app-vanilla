const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cae728c4e4msh22a4596ae71f197p17d743jsn6cbcdaadecfd",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function getWeather(city) {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      temp.innerHTML = response.temp;
      cloud_pct.innerHTML = response.cloud_pct;
      humidity.innerHTML = response.humidity;
      wind_speed.innerHTML = response.wind_speed;
      sunrise.innerHTML = new Date(response.sunrise).toLocaleString();
      sunset.innerHTML = new Date(response.sunset).toLocaleString();
    })
    .catch((err) => console.error(err));
}

submit.onclick = (e) => {
  e.preventDefault();
  city.innerHTML = input.value;
  getWeather(input.value);
};
