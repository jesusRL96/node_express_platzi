const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hola')
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Nueva ruta')
});

app.get('/products', (req, res) => {
    res.json({
        name: 'Product 100',
        price: 200
    })
});

app.listen(port, ()=>{
    console.log('port: ' + port);
});