const express = require('express');
const app = express();

const dishes = [
  { type: 'Sisig', province: 'Pampanga', price: 220 },
  { type: 'Salpicao', province: 'Quezon', price: 180 },
  { type: 'Bagnet', province: 'Ilocos', price: 370 },
];

app.get('/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/dishes/:type', (req, res) => {
  const typeD = req.params.type.toLowerCase();
  const dish = dishes.find((d) => d.type.toLowerCase() === typeD);
  if (dish) {
    res.send(dish);
  } else {
    res.status(404).send('Record not Found');
  }
});

app.use((req, res) => {
  res.status(404).send('Record not Found');
});

app.listen(3000, () => {
  console.log('Server is running on localhost 3000');
});
