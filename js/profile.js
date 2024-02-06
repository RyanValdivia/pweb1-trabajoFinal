
let userData;
    fetch(`cgi/profile.pl?id=${sessionStorage.getItem('userId')}`)
    .then(response => response.json())
            .then(data => {
                // Manipular los datos recibidos
                userData = data;
            })
            .catch(error => console.error('Error:', error));