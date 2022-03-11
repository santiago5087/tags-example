const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/products', (req, res) => {
  res.json({
    products: [
      {
        name: "soap",
        price: "2300",
        quantity: 1
      },
      {
        name: "toothbrush",
        price: "7000",
        quantity: 2
      }
    ]
  });
});

app.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});