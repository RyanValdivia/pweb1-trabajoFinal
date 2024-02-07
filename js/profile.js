fetch(`cgi/profile.pl?id=${sessionStorage.getItem("userId")}`)
  .then((response) => response.json())
  .then((data) => {
    // Manipular los datos recibidos
    const username = data.username;
    const email = data.email;
    const pass = data.password;

    const nombreP = document.getElementById("nombre");
    const tagP = document.getElementById("tag");
    const usernameP = document.getElementById("userName");
    const emailP = document.getElementById("email");
    const passP = document.getElementById("password");

    nombreP.textContent = username;
    tagP.textContent = "@" + username;
    usernameP.textContent = username;
    passP.textContent = pass;

    emailP.textContent = email;
  })
  .catch((error) => console.error("Error:", error));
