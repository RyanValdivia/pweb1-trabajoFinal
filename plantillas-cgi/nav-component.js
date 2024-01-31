let contentNav = /*html*/ `
      <a href="./home-page.html" class="logo">
        <span class="logotipo">Bibliobyte</span>
        <img
          src="./images_icons_background/logo.png"
          alt="Bibliobyte logo"
          class="isotipo"
        />
      </a>
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
          <li><a href="./libros.html">Libros</a></li>
          <li><a href="#">Tus libros</a></li>
          <li><a href="./Acerca.html">Acerca</a>
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

// Evento al escribir en la barra de búsqueda
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

// Evento cuando el input está enfocado
searchInput.addEventListener('focus', function() {
  // Mostrar sugerencias solo si hay algunas
  if (sugerenciasContainer.innerHTML.trim() !== '') {
    sugerenciasContainer.style.display = 'block';
  }
});

// Evento cuando el input pierde el foco
searchInput.addEventListener('blur', function(event) {
  // Ocultar sugerencias solo si el clic no se originó en el contenedor de sugerencias
  if (!sugerenciasContainer.contains(event.relatedTarget)) {
    sugerenciasContainer.style.display = 'none';
  }
});

// Evento al hacer clic en el contenedor de sugerencias
sugerenciasContainer.addEventListener('click', function() {
  // Evita que el clic en las sugerencias oculte el contenedor
  searchInput.focus();
});

function mostrarSugerencias(sugerencias) {
  sugerenciasContainer.innerHTML = "";

  sugerencias.forEach((sugerencia) => {
    const enlace = document.createElement("a");
    enlace.href = "#";
    const img = document.createElement("img");
    img.src = "./images_libros/" + sugerencia.rutaDePortada;
    const titulo = document.createElement("div");
    titulo.textContent = sugerencia.titulo;
    enlace.appendChild(img);
    enlace.appendChild(titulo);

    sugerenciasContainer.appendChild(enlace);
  });

  // Mostrar el contenedor de sugerencias solo si hay sugerencias y el input está enfocado
  sugerenciasContainer.style.display = sugerencias.length > 0 && searchInput === document.activeElement ? 'block' : 'none';
}

