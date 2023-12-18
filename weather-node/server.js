const apiKey = process.env.API_KEY;

const express = require('express');
const axios = require('axios');
require('dotenv').config();
console.log(`A chave API é: ${apiKey}`);

const app = express();

app.use(express.static('public'));

// Rota para obter dados da API do OpenWeatherMap (ou meteorológicos)
app.get('/weather', async (req, res) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Limeira,BR&appid=${apiKey}`); // Estático
        // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city},BR&appid=${apiKey}&units=metric`); // Dinâmico
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});