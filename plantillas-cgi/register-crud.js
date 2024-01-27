document.addEventListener('DOMContentLoaded', function () {
    const formRegister = document.getElementById('formRegister');

    formRegister.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(formRegister);

        fetch('cgi/register.pl', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                alert('Registro exitoso');
                // Puedes redirigir o hacer otras acciones después de un registro exitoso
                window.location.href = "./index.html";
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});