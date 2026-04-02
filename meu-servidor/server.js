const express = require('express');
const app = express();

app.use(express.json()); // permite ler JSON no POST

// 🔹 Rota GET
app.get('/rota', (req, res) => {
    const nome = "Samuel";
    res.send(`Olá ${nome}, você fez um GET!`);
});

// 🔹 Rota POST
app.post('/rota', (req, res) => {
    const nome = "Samuel";
    res.send(`Olá ${nome}, você fez um POST!`);
});

// 🔹 Rota raiz (pra não dar "Cannot GET /")
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});