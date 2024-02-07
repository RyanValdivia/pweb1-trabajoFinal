document.addEventListener("DOMContentLoaded", function () {
  const editarUsernameBtn = document.getElementById("editar-username");
  const editarEmailBtn = document.getElementById("editar-email");
  const editarPassBtn = document.getElementById("editar-pass");

  editarUsernameBtn.addEventListener("click", function () {
    convertirASpanAInput("userName");
  });

  editarEmailBtn.addEventListener("click", function () {
    convertirASpanAInput("email");
  });

  editarPassBtn.addEventListener("click", function () {
    convertirASpanAInput("password");
  });
});

function convertirASpanAInput(campoId) {
  const campoSpan = document.getElementById(campoId);
  const valorOriginal = campoSpan.textContent;

  // Crear un nuevo input y establecer su valor original
  const inputNuevo = document.createElement("input");
  inputNuevo.type = "text";
  inputNuevo.value = valorOriginal;

  // Reemplazar el span con el input
  campoSpan.parentNode.replaceChild(inputNuevo, campoSpan);

  // Enfocar el nuevo input
  inputNuevo.focus();

  // Cuando se pierde el foco del input, enviar los datos actualizados al servidor y volver a mostrar el valor en un span
  inputNuevo.addEventListener("blur", function () {
    const nuevoValor = inputNuevo.value.trim();
    const nuevoSpan = document.createElement("span");
    nuevoSpan.id = campoId;
    nuevoSpan.textContent = nuevoValor;

    // Reemplazar el input con el nuevo span
    inputNuevo.parentNode.replaceChild(nuevoSpan, inputNuevo);

    if (nuevoValor !== "" && nuevoValor !== valorOriginal) {
      console.log(nuevoValor);
      /*/ Enviar los datos actualizados al servidor (aquí se debe implementar el envío a través de fetch)
      fetch(
        `cgi/update_profile.pl?id=${sessionStorage.getItem(
          "userId"
        )}&campo=${campoId}&valor=${nuevoValor}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Manejar la respuesta del servidor si es necesario
          console.log(data);
        })
        .catch((error) => console.error("Error:", error));*/
    }
  });
}
