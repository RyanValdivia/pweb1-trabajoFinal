if(sessionStorage.getItem('userId' != null)){
    const user = document.querySelector("#username");
    const email = document.querySelector("#email");
    user.innerHTML = sessionStorage.getItem('userName');
    email.innerHTML = sessionStorage.getItem('userEmail');
}