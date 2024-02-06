let footerContent = /*html*/`
<footer id="footer" class="footer">
    <div class="footer-4container">
        <h4>Colaboradores:</h4>
        <p>- Arias Quispe Jhonatan David   </p>
        <p>- Ajra huacso Jeans Anthony      </p>
        <p>- Valdivia Segovia Ryan Fabian   </p>
    </div>
    <div class="footer-4container">
        <br>
        <p>- Quispe Arratea Alexandra Raquel</p>
        <p>- Quispe Madriaga Jeferson Jofre </p>  
    </div>
    <div class="footer-4container about">
        <h4>About us</h4>
        <p>Universidad Nacional de San Agustin - Arequipa</p>
        <p>Ver el codigo del proyecto</p>
        <p></p>
    </div>
</footer>
<div class="derechos">
    <p>&copy; 2024 BiblioByte Todos los derechos reservados</p>
</div>`;
const footer = document.querySelector(".footer-container");
footer.innerHTML = footerContent;

let stylesFooter = document.createElement("link");
stylesFooter.href = "./styles/footer-component.css";
stylesFooter.rel = "stylesheet";
stylesFooter.type = "text/css";
head.appendChild(stylesFooter);