document.addEventListener('DOMContentLoaded', function () {
    const formLogin = document.getElementById('loginForm');

    formLogin.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(formLogin);

        fetch('cgi/login.pl', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                alert(data.message);
                var userId = data.user_id;
                sessionStorage.setItem('userId', userId);
                console.log(userId);
                window.location.href = "./home-page.html";

            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});