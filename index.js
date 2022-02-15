const express = require('express');
const routerApi = require('./routes');
const {logErrors, errorHandler} = require('./middlewares/error.handler');
const router = require('./routes/categories.router');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola')
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Nueva ruta')
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log('port: ' + port);
});