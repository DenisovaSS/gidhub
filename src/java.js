//change city
function changeCity(event) {
  event.preventDefault();
  //let chooseyourCity = document.querySelector("h2"); - remove because don't need, change goal
  let writeCity = document.querySelector("#exampleInputEmail1");
  //chooseyourCity.innerHTML = writeCity.value; - remove the same
  let fixCity = writeCity.value;

  cityPosition(fixCity);
}
function cityPosition(fixCity) {
  let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
  let ipIrl = `https://api.openweathermap.org/data/2.5/weather?q=${fixCity}&appid=${apiKey}&units=metric`;
  axios.get(`${ipIrl}&appid=${apiKey}`).then(showTemperature);
}

let yourCity = document.querySelector("#research-form");
yourCity.addEventListener("submit", changeCity);

//inner day/time/date/month
let rightNow = new Date();
let nday = rightNow.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[nday];
let timeHours = rightNow.getHours();
if (timeHours < 10) {
  timeHours = `0${timeHours}`;
}
let timeMinutes = rightNow.getMinutes();
if (timeMinutes < 10) {
  timeMinutes = `0${timeMinutes}`;
}
let h4 = document.querySelector("h4");
h4.innerHTML = `${day}, ${timeHours}:${timeMinutes}`;

let date = rightNow.getDate();
let month = rightNow.getMonth();
let monthAll = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let months = monthAll[month];
let today = document.querySelector(".data-today");
today.innerHTML = `${date} ${months}`;

//position location_week5

function showTemperature(respose) {
  document.querySelector(".city_temp").innerHTML = Math.round(
    respose.data.main.temp
  );
  let celsiusTemper = respose.data.main.temp;

  document.querySelector(".weather_description").innerHTML =
    respose.data.weather[0].main;
  document.querySelector(".min_temperature").innerHTML = Math.round(
    respose.data.main.temp_min
  );
  document.querySelector(".max_temperature").innerHTML = Math.round(
    respose.data.main.temp_max
  );
  document.querySelector("h2").innerHTML = respose.data.name;
  document.querySelector(".humidity").innerHTML = Math.round(
    respose.data.main.humidity
  );
  //change digree
  function temperatureCelsius(event) {
    event.preventDefault();
    let tempCelsi = document.querySelector(".city_temp");
    celsi.classList.add("active");
    fahren.classList.remove("active");
    tempCelsi.innerHTML = Math.round(celsiusTemper);
  }
  let celsi = document.querySelector("#celsius");
  celsi.addEventListener("click", temperatureCelsius);

  function temperatureFahrenheit(event) {
    event.preventDefault();
    let tempfahren = document.querySelector(".city_temp");
    celsi.classList.remove("active");
    fahren.classList.add("active");
    tempfahren.innerHTML = Math.round((celsiusTemper * 9) / 5 + 32);
  }
  let fahren = document.querySelector("#fahrenheit");
  fahren.addEventListener("click", temperatureFahrenheit);
  // console.log(          `http://openweathermap.org/img/wn/${respose.data.weather[0].icon}@2x.png`        );
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${respose.data.weather[0].icon}@2x.png`
    );
}

function showPosition(position) {
  let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
  let ipIrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`;
  axios.get(`${ipIrl}&appid=${apiKey}`).then(showTemperature);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let celsiusTemper = null;

let yourLocation = document.querySelector(".current");
yourLocation.addEventListener("click", getCurrentLocation);

cityPosition("Dnipro");
//my link: https://magenta-souffle-ab6ac7.netlify.app/
