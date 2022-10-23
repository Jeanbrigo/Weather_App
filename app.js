// variable for API key
const apiKey = "9cad6dfc5a1ce59290a48c92f0f7595c";

const baseURL = `https://api.openweathermap.org/data/2.5/weather?`;

const $main = $("main");

$main.append(`
  <p>Weather for: </p>
  <p>Temperature: </p>
  <p>Feels like: </p>
  <p>Weather: </p>`);

const kelvinConverter = (kelvin) => {
  return ~~((kelvin - 273.15) * 9) / 5 + 32;
};
function cityWeather(city) {
// request
  const url = `${baseURL}q=${city}&appid=${apiKey}`

  const weatherInfo = $.ajax(url);

// response from the API
   const response = weatherInfo

    .then((cityName) => {
    $main.empty();
    $main.html(`
      <p>Weather for: ${cityName.name}</p>
      <p>Temperature: ${kelvinConverter(cityName.main.temp)}°</p>
      <p>Feels like: ${kelvinConverter(cityName.main.feels_like)}°</p>
      <p>Weather: ${cityName.weather[0].description}</p>`);
  })
  // when error is found by API
  .catch(err => console.log(err)) //
};
$("input[type=submit]").on("click", (event) => {
  event.preventDefault();
  const inputText = $("input[type=text]").val();
  // update the screen
    cityWeather
  (inputText);
  //clean up
  $("input[type=text]").val(null);
});


//cityWeather('Austin');
