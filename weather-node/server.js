require('dotenv').config();
const apiKey = process.env.API_KEY;

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('caminho_para_meus_arquivos_estaticos'));

// Rota para obter dados da API do OpenWeatherMap (ou meteorológicos)
app.get('/weather', async (req, res) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Limeira,BR&appid=${apiKey}`); // Estático
        // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city},BR&appid=${apiKey}&units=metric`); // Dinâmico
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});