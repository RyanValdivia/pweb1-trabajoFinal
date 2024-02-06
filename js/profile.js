let userData;
    fetch(`cgi/profile.pl?id=${sessionStorage.getItem('userId')}`)
    .then(response => response.json())
            .then(data => {
                // Manipular los datos recibidos
                userData = data;
            })
            .catch(error => console.error('Error:', error));
const username = userData.username;
const email = userData.email;

const nombreP = document.getElementById('nombre');
const tagP = document.getElementById('tag');
const usernameP = document.getElementById('username');
const emailP = document.getElementById('email');

nombrep.textContent = username;
tagP.textContent = username;
usernameP.textContent = username;

emailP.textContent = email;