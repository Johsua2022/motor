//const express = require("express");
//const app = express();
//const port = 3000;

//app.set("view engine", "ejs");
//app.set("views", "./views");

//app.get("/", (req, res) => {
//const nombre = "Mundo";
//res.render("index", { nombre });
//});

//app.listen(port, () => {
// console.log(`Servidor escuchando en el puerto ${port}`);
//});
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

const personas = [
  { nombre: "Juan", apellido: "Pérez", edad: 30 },
  { nombre: "Ana", apellido: "López", edad: 25 },
  { nombre: "Carlos", apellido: "Gómez", edad: 40 },
  { nombre: "Johsua", apellido: "Jaramillo", edad: 34 },
];

const productos = [
  { nombre: "Reloj", marca: "xiaomi", precio: 200 },
  { nombre: "laptop", marca: "hp", precio: 500 },
  { nombre: "celular", marca: "samsumg", precio: 300 },
  { nombre: "laptop", marca: "mac", precio: 800 },
];

app.get("/", (req, res) => {
  res.render("index", { personas, productos });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
