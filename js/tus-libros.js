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

function addBook(book){
  const bookContainer = document.querySelector(".books-container");
  const book = createBook(book);
  bookContainer.appendChild(book);
}

/*Para agregar un libro a la lista de libros, se debe llamar a la función addBook con el libro que se quiere agregar.*/