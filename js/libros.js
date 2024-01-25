function consultarDatos(id) {
    // Realizar una solicitud FETCH para obtener los datos del servidor Perl
    fetch(`./cgi/libros.pl?id=${id}`)
        .then(response => response.json())
        .then(data => {
            // Redireccionar a la página de resultados con los datos como parámetros de consulta
            window.location.href = `./plantilla-cada-libro.html?title=${data.titulo}&author=${data.autor}&desc=${data.descripcion}&imgRoute=${data.rutaDePortada}.`;
        })
        .catch(error => console.error('Error:', error));
} 