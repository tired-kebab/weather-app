const inputBox = document.getElementById("input-box");
const submitBtn = document.getElementById("submit-btn");
const weatherInfo = document.querySelector(".weather");
const cityInfo = document.querySelector(".city");
const tempInfo = document.querySelector(".temp");
const humidityInfo = document.querySelector(".humidity");
const windInfo = document.querySelector(".wind");

let city;

async function checkWeather() {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/weather?city=${city}`,
    { headers: { "X-API-Key": "wYTTkwhrLA8ntlwiIt9rlg==A1qERtFVhXY9UZ1H" } }
  );

  if (city) {
    weatherInfo.classList.remove("hidden");
  }

  const data = await response.json();
  console.log(data);
  cityInfo.innerHTML = inputBox.value;
  tempInfo.innerHTML = `${data.temp}°C`;
  humidityInfo.innerHTML = `${data.humidity}%`;
  windInfo.innerHTML = `${data.wind_speed} km/h`;
  inputBox.value = "";
}

submitBtn.addEventListener("click", () => {
  city = inputBox.value;
  checkWeather();
});
