const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 4500;

const connection = mysql.createConnection({
  host: "localhost",
  user: "manzana",
  password: "1604",
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

// Crear una api llamada search-books que reciba un query param llamado search
app.get("/search-books", (req, res) => {
  const searchQuery = req.query.search;
  const query = `SELECT * from libros`;

  connection.query(query, (err, resultados) => {
    if (err) {
      console.error("Error al buscar libros:", err);
      res.status(500).json({ error: "Error al buscar libros" });
    } else {
      let mejoresSugerencias = obtenerMejoresSugerencias(searchQuery, resultados);
      res.json(mejoresSugerencias);
    }
  });
});

function obtenerMejoresSugerencias(terminoBusqueda, libros) {
    const librosCoincidentes = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        libro.autor.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        libro.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        libro.generoLiterario.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );

    librosCoincidentes.sort((a, b) => {
        const coincidenciaA = a.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ? a.titulo.length : 0;
        const coincidenciaB = b.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ? b.titulo.length : 0;

        return coincidenciaB - coincidenciaA;
    });

    const mejoresSugerencias = librosCoincidentes.slice(0, 7);

    return mejoresSugerencias;
}

app.listen(port, () => {
  console.log(`Servidor Node.js en ejecución en http://localhost:${port}`);
});
