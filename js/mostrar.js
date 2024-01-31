// Obtener los parámetros de la URL y convertirlos de nuevo a un objeto
const params = new URLSearchParams(window.location.search);
const title = params.get('title');
const desc = params.get('desc');
const author = params.get('author');
const imgRoute = params.get('imgRoute');

console.log(title, desc, author, imgRoute);

const t = document.querySelector('#title');
t.innerHTML = title;
const a = document.querySelector('#author');
a.innerHTML = author;
const d = document.querySelector('#desc');
d.innerHTML = desc;
const img = document.querySelector('#img');
img.src = "./images_libros/" + imgRoute;
console.log(img.src);

// Mostrar los datos en la página
