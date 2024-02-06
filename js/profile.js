if(sessionStorage.getItem('userId' != null)){
    fetch(`cgi/profile.pl?id=${sessionStorage.getItem('userId')}`)
    .then(response => response.json())
            .then(data => {
                // Manipular los datos recibidos
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
}