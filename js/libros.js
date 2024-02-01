const createLink = (libro) => {
  const title = libro.titulo;
  const autor = libro.autor;
  const imgRoute = libro.rutaDePortada;
  return `./plantilla-cada-libro.html?title=${title}&author=${autor}&imgRoute=${imgRoute}`;
};

const obtenerLibros = async () => {
  try {
    const response = await fetch("http://localhost:4500/obtener-imagenes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener imágenes: ", error);
    throw error;
  }
};

let libros;

const cargarLibros = async () => {
  try {
    libros = await obtenerLibros();

    const generos = {};

    libros.forEach((libro) => {
      if (!generos[libro.generoLiterario]) {
        generos[libro.generoLiterario] = [];
      }

      let portada = document.createElement("img");
      portada.src = `./images_libros/${libro.rutaDePortada}`;

      let descripcion = document.createElement("div");
      descripcion.textContent = libro.descripcion;

      let background = document.createElement("a");
      background.classList.add("background");
      background.appendChild(portada);
      background.appendChild(descripcion);
      background.href = createLink(libro);

      let container = document.createElement("div");
      container.classList.add("container");
      container.style.backgroundImage = `url('./images_libros/${libro.rutaDePortada}')`;
      container.style.backgroundSize = "cover";
      container.appendChild(background);

      generos[libro.generoLiterario].push(container);
    });

    // Crear una cartelera por cada género literario
    for (const genero in generos) {
      const cartelera = document.querySelector(`.${genero.toLowerCase().split(" ").join("-")}-cartelera`);
      
      if (cartelera) {
        generos[genero].forEach((container) => {
          cartelera.appendChild(container);
        });
      }
    }
  } catch (error) {
    console.error("Error al cargar libros: ", error);
  }
};

const iniciar = async () => {
  await cargarLibros();
};

iniciar();
