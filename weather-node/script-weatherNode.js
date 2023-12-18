document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2c9d5b9b0b0b0b0b0b0b0b0b0b0b0b0b')
    .then(response => response.json())
    .then(data) => {
        const weatherDiv = document.getElementById('Weather');
        const content = `Temperatura: ${data.main.temp}°C<br>
                         Clima: ${data.weather[0].main}<br>
                         Descrição: ${data.weather[0].description}`;
        weatherDiv.innerHTML = content;
    })
    .catch(error => console.error('Erro ao buscar dados: ', error));
    }