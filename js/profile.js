const user = document.querySelector("#userName");
const email = document.querySelector("#email");
const tag = document.querySelector("#tag");

fetch(`cgi/profile.pl?id=${sessionStorage.getItem("userId")}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    user.innerHTML = data.username;
    email.innerHTML = data.email;
  })
  .catch((error) => console.error("Error:", error));
