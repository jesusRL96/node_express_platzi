# Curso Node.js y Express.js

## Iniciar proyecto
iniciar un proyecto por default
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
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```
```js
"dev": "nodemon index.js",
"start": "node index.js",
"lint": "eslint"
```