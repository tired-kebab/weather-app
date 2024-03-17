const inputBox = document.getElementById("input-box");
const submitBtn = document.getElementById("submit-btn");

let city;

async function checkWeather() {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/weather?city=" + city,
    { headers: { "X-API-Key": "wYTTkwhrLA8ntlwiIt9rlg==A1qERtFVhXY9UZ1H" } }
  );
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = inputBox.value;
  document.querySelector(".temp").innerHTML = data.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind_speed + " km/h";
}

submitBtn.addEventListener("click", () => {
  city = inputBox.value;
  //   inputBox.value = "";
  checkWeather();
});
