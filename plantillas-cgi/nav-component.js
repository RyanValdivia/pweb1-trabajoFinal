var ip = "3.137.139.201" || "localhost";

let fixPath = "";

if (window.location.pathname.split("/").length === 3) {
  fixPath = ".";
}

let userName = sessionStorage.getItem("userName");

let contentNav = /*html*/ `
      <a href="./home-page.html" class="logo">
        <span class="logotipo">Bibliobyte</span>
        <img
          src= "${fixPath}./images_icons_background/logo.png"
          alt="Bibliobyte logo"
          class="isotipo"
        />
      </a>
      <div class="tool-bar">
        <div class="search">
          <img
            src="${fixPath}./images_icons_background/search.svg"
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
          <li id="admin"><a href="${fixPath}./crud-admin.html">Añadir libros</li>
          <li><a href="${fixPath}./libros.html">Libros</a></li>
          <li><a href="#">Tus libros</a></li>
          <li><a href="${fixPath}./Acerca.html">Acerca</a>
          </li>
        </ul>
      </div>
      <div class="sesion">
        <img
          src="${fixPath}./images_icons_background/user-1.png"
          alt="user image"
          class="user-image"
        />
        <a href="${fixPath}./perfil.html"><span class="user-name">${userName}</span></a>
      </div>
`;

let navContainer = document.querySelector(".nav-container");
navContainer.innerHTML = contentNav;

let searchInput = document.querySelector(".search-bar");
let head = document.querySelector("head");
let styles = document.createElement("link");
styles.href = fixPath + "./styles/nav-component.css";
styles.rel = "stylesheet";
styles.type = "text/css";

head.appendChild(styles);

const sugerenciasContainer = document.getElementById("sugerencias");

searchInput.addEventListener("input", function () {
  let searchQuery = searchInput.value;
  fetch(`http://${ip}:4500/search-books?search=${searchQuery}`)
    .then((response) => response.json())
    .then((data) => {
      mostrarSugerencias(data);
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
});

searchInput.addEventListener("focus", function () {
  if (sugerenciasContainer.innerHTML.trim() !== "") {
    sugerenciasContainer.style.display = "block";
  }
});

searchInput.addEventListener("blur", function (event) {
  if (!sugerenciasContainer.contains(event.relatedTarget)) {
    sugerenciasContainer.style.display = "none";
  }
});

sugerenciasContainer.addEventListener("click", function () {
  searchInput.focus();
});

function mostrarSugerencias(sugerencias) {
  sugerenciasContainer.innerHTML = "";

  sugerencias.forEach((sugerencia) => {
    const enlace = document.createElement("a");
    const img = document.createElement("img");
    img.src = fixPath + "./images_libros/" + sugerencia.rutaDePortada;
    const titulo = document.createElement("div");
    titulo.textContent = sugerencia.titulo;
    enlace.appendChild(img);
    enlace.appendChild(titulo);

    enlace.href =
      fixPath +
      `/plantilla-cada-libro.html?title=${sugerencia.titulo}&desc=${sugerencia.descripcion}&author=${sugerencia.autor}&imgRoute=${sugerencia.rutaDePortada}&id=${sugerencia.id}`;

    sugerenciasContainer.appendChild(enlace);
  });

  sugerenciasContainer.style.display =
    sugerencias.length > 0 && searchInput === document.activeElement
      ? "block"
      : "none";
}

let sticky;
const nav = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", function () {
  sticky = nav.offsetTop;
});

window.addEventListener("scroll", function () {
  if (window.scrollY > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

const admin = document.getElementById("admin");
console.log(sessionStorage.getItem("role"));
console.log(sessionStorage.getItem("userId"));
console.log(sessionStorage.getItem("userName"));

if (sessionStorage.getItem("role") === "admin") {
  admin.style.display = "block";
} else {
  admin.style.display = "none";
}
