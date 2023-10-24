function displayTemperature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innnerhtml = response.condition.description;
  iconElement.innerhtml = response.data.condition.icon;
}

let city = "Johannesburg";
let apiKey = "88td453618166250a7dc33aob396fe0b";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
