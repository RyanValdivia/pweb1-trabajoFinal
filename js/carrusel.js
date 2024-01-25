async function obtenerLibros() {
  try {
    const response = await fetch("cgi/carrusel.pl");
    if (!response.ok) {
      throw new Error("Error al obtener los libros");
    }

    const data = await response.json();
  } catch (error) {
    console.log("Error: ", error);
  }
  return data;
}

function cambio(sen) {
  let carrusel = document.getElementById("centro");
  carrusel.contador += sen;
  if (carrusel.contador == carrusel.lista.length) {
    carrusel.contador = 0;
  } else if (carrusel.contador < 0) {
    carrusel.contador = carrusel.lista.length - 1;
  }
  carrusel.src = carrusel.lista[carrusel.contador];
}
function reset() {
  let carrusel = document.getElementById("centro");
  carrusel.lista = obtenerLibros().map((libro) => {
    libro.rutaDePortada;
  });
  carrusel.contador = 0;
  carrusel.tempor = null;
  parar();
  carrusel.src = carrusel.lista[0];
}
function parar(car) {
  let carrusel = document.getElementById("centro");
  if (carrusel.tempor != null) clearTimeout(carrusel.tempor);
}
function automat(tiempo, inc = 1) {
  let carrusel = document.getElementById("centro");
  clearTimeout(carrusel.tempor);
  cambio(inc);
  carrusel.tempor = setTimeout(automat, tiempo, tiempo, inc);
}
