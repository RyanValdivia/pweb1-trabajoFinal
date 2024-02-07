document.addEventListener("DOMContentLoaded", function () {
  const editarUsernameBtn = document.getElementById("editar-username");
  const editarEmailBtn = document.getElementById("editar-email");
  const editarPassBtn = document.getElementById("editar-pass");

  editarUsernameBtn.addEventListener("click", function () {
    editarCampo("userName");
  });

  editarEmailBtn.addEventListener("click", function () {
    editarCampo("email");
  });

  editarPassBtn.addEventListener("click", function () {
    editarCampo("password");
  });
});

function editarCampo(campoId) {
  const campoSpan = document.getElementById(campoId);
  const valorOriginal = campoSpan.textContent;
  const nuevoValor = prompt(`Editar ${campoId}`, valorOriginal);
  if (nuevoValor !== null && nuevoValor !== "") {
    console.log(nuevoValor);
    // Enviar los datos actualizados al servidor (aquí se debe implementar el envío a través de fetch)
    /*fetch(
      `cgi/update_profile.pl?id=${sessionStorage.getItem(
        "userId"
      )}&campo=${campoId}&valor=${nuevoValor}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor si es necesario
        console.log(data);
        // Actualizar el valor en el campo span
        campoSpan.textContent = nuevoValor;
      })
      .catch((error) => console.error("Error:", error));/*/
  }
}
