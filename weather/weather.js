
const apiKey = 'c65f20f04980a88d2c1cd69265f9ae69'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');
    
    if (!city) {
        weatherInfo.innerHTML = 'Please enter a city.';
        return;
    }

    try {
        /* aama aatle "https://openweathermap.org/price" thi API generate karavani che , e 1000 calls lagi free che so ideal for aapdu project */
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const weather = `
            <h3>Weather in ${data.name}</h3>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        weatherInfo.innerHTML = weather;
    } catch (error) {
        weatherInfo.innerHTML = `Error: ${error.message}`;
    }
}