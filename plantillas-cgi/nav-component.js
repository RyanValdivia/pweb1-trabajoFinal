let contentNav = /*html*/ `
      <div class="logo">
        <span class="logotipo">Bibliobyte</span>
        <img
          src="./images_icons_background/logo.png"
          alt="Bibliobyte logo"
          class="isotipo"
        />
      </div>
      <div class="tool-bar">
        <div class="search">
          <img
            src="./images_icons_background/search.svg"
            alt="search icon"
            class="search-icon"
          />
          <div class="search-bar-container">
            <input
            type="text"
            name="search"
            placeholder="Busca un libro..."
            class="search-bar"
            autocomplete="off"
            />
            <div id="sugerencias"></div>
          </div>
        </div>
        <ul class="links">
          <li><a href="#">Libros</a></li>
          <li><a href="#">Tus libros</a></li>
          <li><a href="#">Acerca</a>
          </li>
        </ul>
      </div>
      <div class="sesion">
        <img
          src="./images_icons_background/user-1.png"
          alt="user image"
          class="user-image"
        />
        <span class="user-name">Jhonatan Dczel</span>
      </div>
`;

let navContainer = document.querySelector(".nav-container");
navContainer.innerHTML = contentNav;

let searchInput = document.querySelector(".search-bar");
let head = document.querySelector("head");
let styles = document.createElement("link");
styles.href = "./styles/nav-component.css";
styles.rel = "stylesheet";
styles.type = "text/css";

head.appendChild(styles);

const sugerenciasContainer = document.getElementById('sugerencias');

searchInput.addEventListener('input', function () {
  let searchQuery = searchInput.value;
  fetch(`http://localhost:4500/search-books?search=${searchQuery}`)
    .then((response) => response.json())
    .then((data) => {
      mostrarSugerencias(data);
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
});

searchInput.addEventListener('focus', function() {
  if (sugerenciasContainer.innerHTML.trim() !== '') {
    sugerenciasContainer.style.display = 'block';
  }
});

searchInput.addEventListener('blur', function() {
  sugerenciasContainer.style.display = 'none';
});

function mostrarSugerencias(sugerencias) {
  sugerenciasContainer.innerHTML = "";

  sugerencias.forEach((sugerencia) => {
    const enlace = document.createElement("a");
    enlace.href = sugerencia.rutaDePortada;
    enlace.textContent = sugerencia.titulo;

    enlace.addEventListener("click", function (event) {
      event.preventDefault();
      alert(`Navegar a: ${this.href}`);
    });

    sugerenciasContainer.appendChild(enlace);
  });

  sugerenciasContainer.style.display = sugerencias.length > 0 && searchInput === document.activeElement ? 'block' : 'none';
}
