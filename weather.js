// Substitua 'YOUR_API_KEY' pela chave da API que você obteve
const apiKey = '5642e7d249c2bc5dd8dc90a9a7bed611';
const city = 'Limeira';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function getWeather() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temp').textContent = data.main.temp;
            document.getElementById('condition').textContent = data.weather[0].description;
        })
        .catch(error => console.error('Erro ao obter dados da API:', error));
}

// Chama a função ao carregar a página
window.onload = getWeather;
