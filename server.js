const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 4500;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca",
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/obtener-imagenes", (req, res) => {
  const query = "SELECT * FROM libros";

  connection.query(query, (err, resultados) => {
    if (err) {
      console.error("Error al obtener imágenes desde la base de datos:", err);
      res
        .status(500)
        .json({ error: "Error al obtener imágenes desde la base de datos" });
    } else {
      res.json(resultados);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Node.js en ejecución en http://localhost:${port}`);
});
