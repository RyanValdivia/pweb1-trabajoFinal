document.addEventListener("DOMContentLoaded", function () {
  const formCrud = document.getElementById("formCrud");

  formCrud.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(formLogin);

    fetch("cgi/login.pl", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === 1) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  });
});
