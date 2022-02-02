const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hola')
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Nueva ruta')
});

app.get('/products/', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        })

    }
    res.json(products)
});

app.get('/products/filter', (req, res) => {
    res.send('hola filter')
});

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    res.json({
            id,
            name: 'Product 1',
            price: 100
        })
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const {categoryId, productId} = req.params;
    res.json({
            categoryId,
            productId,
        })
});

app.get('/users', (req, res) => {
    const {limit, offset} = req.query
    if (limit && offset) {
        res.json({
            limit,
            offset
        })
    }
    else {
        res.send('no hay parametros')
    }
});

app.listen(port, ()=>{
    console.log('port: ' + port);
});