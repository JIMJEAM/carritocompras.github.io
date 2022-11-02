const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const cors = requiere('cors');

// BB.DD
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectado a BB.DD'));

// Import Routes
const itemsRoutes = require('./routes/items');
const imgRoutes = require('./routes/img');
const paymentsIntentRoutes = require('./routes/paymentsIntent');
const ordersRoutes = require('./routes/orders');

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use('/items', itemsRoutes);
app.use('/img', imgRoutes);
app.use('/create-payment-intent', paymentsIntentRoutes);
app.use('/order', ordersRoutes);

// Rutas
app.get('/', (req, res) => {
  res.send('HOME!');
});

// Start
//app.listen(3000);

const PORT = process.env.PORT || 3000
app.listen(PORT, function() {

	console.log("Servidor escuchando en el puerto", PORT)

})


const http = require("http");

require("dotenv").config();

let port = process.env.PORT;
let host = process.env.HOST;

let server = http.createServer((req, res) => {
  console.log("Thanks for the request");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("You Rock");
});

server.listen(port, host, () => {
  console.log(`Server is listening ${host}:${port}`);
});