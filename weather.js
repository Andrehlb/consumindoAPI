const apiKey = '5642e7d249c2bc5dd8dc90a9a7bed611';
const city = 'Limeira';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${apiKey}&units=metric`;

function getWeather() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('temp').textContent = data.main.temp;
            document.getElementById('condition').textContent = data.weather[0].main;
        })
        .catch(error => console.error('Erro ao obter dados da API:', error));
}

window.onload = getWeather;
