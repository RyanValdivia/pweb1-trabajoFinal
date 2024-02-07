var ip = "localhost";

var userId = localStorage.getItem("userId");

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
  bookImage.src = book.rutaDePortada;
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

fetch(`http://${ip}:4500/obtener-libros-favoritos/${userId}`)
  .then(response => response.json())
  .then(books => addBooks(books))
  .catch(error => console.error('Error al obtener libros favoritos:', error));
/*Para agregar un libro a la lista de libros, se debe llamar a la función addBook con el libro que se quiere agregar.*/