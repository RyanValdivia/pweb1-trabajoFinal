// Obtener los parámetros de la URL y convertirlos de nuevo a un objeto
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
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

let titlePage = document.querySelector('title');
titlePage.textContent = title + " - BiblioByte";

// Mostrar los datos en la página
// Boton para encontrar libro
const btn = document.querySelector('#cgi-google');
btn.href = `https://www.amazon.com/s?k=${title}+${author}&i=stripbooks-intl-ship&ref=nb_sb_noss_2`;