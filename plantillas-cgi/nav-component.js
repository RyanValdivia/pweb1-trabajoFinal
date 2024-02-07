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
          <li><a href="${fixPath}./tus-libros.html">Tus libros</a></li>
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
        <span class="user-name">${userName}</span>
        <div class="dropdown">
          <a href="${fixPath}./index.html" class="drop-item" id="cerrar-sesion">Cerrar sesión</a>
          <a href="${fixPath}./perfil.html" class="drop-item">Ver perfil</a>
        </div>
      </div>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="cerrarModal()">&times;</span>
      <p>Para continuar, tienes que iniciar sesión</p>
      <a href="/index.html"><button>Iniciar sesion</button></a>
    </div>
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

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownTrigger = document.querySelector(".sesion");

  dropdownTrigger.addEventListener("click", function () {
    dropdown.style.display = dropdown.style.display === "none" ? "flex" : "none";
  });

  document.addEventListener("click", function (event) {
    if (!dropdownTrigger.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });
});

const cerrarSesion = document.getElementById("cerrar-sesion");
cerrarSesion.addEventListener("click", function () {
  sessionStorage.clear("userId");
});

    function verificarSesion() {
      if (sessionStorage.getItem("userId") == null) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";

        var overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.backdropFilter = "blur(5px)";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        overlay.style.zIndex = "4";
        modal.parentNode.insertBefore(overlay, modal);
        overlay.addEventListener("click", function() {
          cerrarModal();
        });
      }
    }

    function cerrarModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";

      window.location.href = "/index.html";
    }

    window.addEventListener("load", verificarSesion);