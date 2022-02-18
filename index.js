const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const router = require('./routes/categories.router');

const app = express();
const port = 3000;

app.use(express.json());

const allowed = ['http://localhost:8080', 'https://myapp.co'];
const options = {
    origin: (origin, callback) =>  {
        if (allowed.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'))
        }
    }
}
app.use(cors(options));

app.get('/', (req, res) => {
    res.send('Hola')
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Nueva ruta')
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log('port: ' + port);
});