var ip = "localhost";

var userId = localStorage.getItem("userId");
const bookContainer = document.querySelector(".books-container");
console.log("from tus libros: ", userId);

const createLink = (libro) => {
  const title = libro.titulo;
  const autor = libro.autor;
  const desc = libro.descripcion;
  const imgRoute = libro.rutaDePortada;
  return `./plantilla-cada-libro.html?title=${title}&author=${autor}&desc=${desc}&imgRoute=${imgRoute}`;
};

function createBook(book) {
  var bookElement = document.createElement('a');
  bookElement.href = createLink(book);
  bookElement.className = 'book';
  bookImage = document.createElement('img');
  bookImage.src = "./images_libros/" + book.rutaDePortada;
  bookElement.appendChild(bookImage);
  return bookElement;
}

function addBook(bookF){
  const bookContainer = document.querySelector(".books-container");
  const book = createBook(bookF);
  bookContainer.appendChild(book);
}

function addBooks(books){
  books.forEach(addBook);
}

fetch(`http://${ip}:4500/obtener-libros-favoritos/${sessionStorage.getItem("userId")}`)
  .then(response => response.json())
  .then(books => addBooks(books))
  .catch(error => console.error('Error al obtener libros favoritos:', error));

//agregame un alogica para poner un mensaje como "aun no tienes libros guardados" cuando bookContainer este vacio
if (bookContainer.children.length === 0) {
  const message = document.createElement('h1');
  message.textContent = "Aún no tienes libros guardados";
  bookContainer.appendChild(message);
}
