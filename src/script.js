const apiKey = "e734897c54c9e4828df2fc79783c2300";

async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || "Something went wrong");

    // Update DOM
    document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°F`;
    document.getElementById("description").textContent = data.weather[0].main;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind").textContent = `${data.wind.speed} mph`;

    // Optional: change weather icon
    const icon = document.getElementById("weather-icon");
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.alt = data.weather[0].description;

  } catch (err) {
    document.getElementById("location").textContent = "❌" + err.message;
    document.getElementById("temp").textContent = "--°";
    document.getElementById("description").textContent = "";
    document.getElementById("humidity").textContent = "--%";
    document.getElementById("wind").textContent = "-- mph";
    document.getElementById("weather-icon").src = "";
  }
}

// Listen to form submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("weatherForm");
  const input = document.getElementById("cityInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city) getWeatherData(city);
  });

  window.addEventListener("load", () => {
  getWeather("Orlando"); // or any default city
});

});
