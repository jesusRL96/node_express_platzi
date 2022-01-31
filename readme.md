# Curso Node.js y Express.js

## Iniciar proyecto
Iniciar un proyecto por default
```bash
npm init -y
```
Crear gitignore, editorconfig y eslintrc
```js
{
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "no-console": "warn"
  }
}
```
Instalar paquetes y crear scripts
```bash
# dev
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
# prod
npm i express
```
```js
"dev": "nodemon index.js",
"start": "node index.js",
"lint": "eslint"
```
Crear hola mundo
```js
// index.js
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hola')
});

app.listen(port, ()=>{
    console.log('port: ' + port);
});
```