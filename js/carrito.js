var ip;

function agregarLibroFavorito(usuarioId, libroId) {
  fetch(`http://${ip}:4500/agregar-libro-favorito`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ usuarioId, libroId }),
  })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error('Error al agregar libro favorito:', error));
}

const userId = sessionStorage.getItem('userId');
const bookId = params.get('id');
const button = document.getElementById("agregar-favoritos");
button.addEventListener("click", () => {
  agregarLibroFavorito(userId, bookId);
  console.log("datos enviados: ",userId, bookId);
  alert("Libro agregado a favoritos");
});