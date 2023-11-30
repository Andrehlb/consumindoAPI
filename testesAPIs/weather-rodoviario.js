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

// Path: weather-rodoviario.js


function carregarDadosANTT() {
    fetch('https://dados.antt.gov.br/dataset/6977061e-0086-4818-808b-c6db68ef4638/resource/41b6f255-f309-472c-9b54-a96ca515545a/download/solucoes_de_ti_gerenciadas_pela_antt.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('dadosANTT').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Erro ao obter dados da ANTT:', error));
}

window.onload = () => {
    getWeather();
    carregarDadosANTT();
};