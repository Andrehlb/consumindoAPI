function fetchWeather() {
    fetch('/weather?city=${city}')
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('Weather');
        const content = `Cidade: ${city}<br>
                         Temperatura: ${data.main.temp}°C<br>
                         Clima: ${data.weather[0].main}<br>
                         Descrição: ${data.weather[0].description}`;
        weatherDiv.innerHTML = content;
    })
    .catch(error => console.error('Erro ao buscar dados: ', error));
}

// Evento que carrega a previsão do tempo para uma cidade padrão ao carregar a página.
document.addEventListener('DOMContentLoaded', function() {
    const defaultCity = 'Limeira';
    fetchWeather(defaultCity)
});

// Evento de clique do botão que busca a previsão do tempo para a cidade inserida pelo usuário.
document.getElementById('checkWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
});