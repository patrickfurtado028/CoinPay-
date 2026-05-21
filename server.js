const express = require('express');
const { Web3 } = require('web3');
const app = express();
const path = require('path');

// RPC barato do QuickNode (substitua pelo seu link após assinar)
const web3 = new Web3('https://seu-endpoint-aqui.quiknode.pro/abc/'); 

app.use(express.static('public'));
app.use(express.json());

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota simples para o front registrar o pedido (ex: TX-12345)
app.post('/api/registrar', (req, res) => {
    console.log("Novo pedido registrado:", req.body);
    res.json({ status: "ok" });
});

// Monitoramento básico
setInterval(async () => {
    try {
        const block = await web3.eth.getBlock('latest', true);
        block.transactions.forEach(tx => {
            // Lógica de filtro: Aqui você compara tx.to com sua carteira
            // e tx.value com o valor esperado do pedido
        });
    } catch (e) { console.error("Erro na rede:", e); }
}, 15000); // Checa a cada 15 segundos

app.listen(process.env.PORT || 3000, () => console.log('PDV Online!'));

