    fetch(`cgi/profile.pl?id=${sessionStorage.getItem('userId')}`)
    .then(response => response.json())
            .then(data => {
                // Manipular los datos recibidos
                const username = data.username;
                const email = data.email;

                const nombreP = document.getElementById('nombre');
                const tagP = document.getElementById('tag');
                const usernameP = document.getElementById('userName');
                const emailP = document.getElementById('email');

                nombreP.textContent = username;
                tagP.textContent = "@" + username;
                usernameP.textContent = username;

                emailP.textContent = email;
            })
            .catch(error => console.error('Error:', error));
