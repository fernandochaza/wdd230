export function displayWeather() {
  const weatherInfo = document.querySelector("#weather-info");
  const weatherIcon = document.querySelector("#weather-icon");

  const key = "fb29c431fd773dbb2b992a9ede88900a";
  const lat = "-46.44";
  const lon = "-67.52";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
        throw new Error(await response.text())
      }
    } catch (error) {
      console.log(error);
    }
  }

  const displayResults = (weatherEvent) => {

    const eventDescription = weatherEvent.weather[0].description;
    const iconUrl = `https://openweathermap.org/img/w/${weatherEvent.weather[0].icon}.png`;
    const temp = `${weatherEvent.main.temp}°C`;

    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', `${eventDescription} Icon`);

    weatherInfo.innerHTML += `${temp} <br> ${eventDescription.charAt(0).toUpperCase()}${eventDescription.slice(1)}`;
  }

  apiFetch()
}
