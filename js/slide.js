const prev = document.querySelector(".prev");
const slide = document.querySelector(".slide");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  slide.scrollLeft -= 300;
});

next.addEventListener("click", () => {
  slide.scrollLeft += 300;
});

const obtenerLibros = async function () {
  try {
    const response = await fetch("http://localhost:3000/obtener-imagenes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener imágenes: ", error);
    throw error;
  }
};

const cargarLibros = async function () {
  try {
    const libros = await obtenerLibros();

    libros.forEach((libro) => {
      let portada = document.createElement("img");
      portada.src = "./images_libros/" + libro.rutaDePortada;
      slide.appendChild(portada);
    });
  } catch (error) {
    console.error("Error al cargar libros: ", error);
  }
};

cargarLibros();
