require('dotenv').config();
const apiKey = process.env.API_KEY;

const express = require('express');
const app = express();

app.use(express.static('caminho_para_meus_arquivos_estaticos'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});