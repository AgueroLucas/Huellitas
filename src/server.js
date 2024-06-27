const express = require("express");
const app = express();
const PORT = 3000;

const clienteRouter = require("../routes/cliente");
const productoRouter = require("../routes/producto");
const pedidoRouter = require("../routes/pedido");
const titularRouter = require("../routes/titular");
const mascotaRouter = require("../routes/mascota");
const turnoRouter = require("../routes/turno");


app.use(express.json());

// Basic route for the root of the server
app.get("/", (req, res) => {
    res.send("Welcome to the Tienda API!");
});


app.use("/cliente", clienteRouter);
app.use("/producto", productoRouter);
app.use("/pedido", pedidoRouter);
app.use("/titular", titularRouter);
app.use("/mascota", mascotaRouter);
app.use("/turno", turnoRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});