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
  carrusel.lista = new Array(
    "../images_libros/1_ElPrincipito.jpg",
    "../images_libros/10_Verity.jpg",
    "../images_libros/11_Aliciaenelpaísdelasmaravillas.jpg",
    "../images_libros/15_PeterPan.jpg",
    "../images_libros/19_Matilda.jpg"
  );
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
