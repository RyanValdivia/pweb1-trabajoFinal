const pwd1 = document.querySelector('#user-password');
const pwd2 = document.querySelector('#user-password-2');

pwd2.addEventListener('input', checkValid);

function checkValid() {
  let isValid = pwd1.value === pwd2.value;
  changeStatus(isValid);

  if (!isValid) {
    pwd2.setCustomValidity('Las contraseñas no coinciden');
  } else {
    pwd2.setCustomValidity('');
  }

  pwd2.validity.valid = isValid;
  console.log(`isValid: ${isValid}\ndata-status: ${pwd2.dataset.status}\nvalid:${pwd2.validity.valid}`);
  console.log(`pwd1: ${pwd1.value}\npwd2: ${pwd2.value}`);
}

function changeStatus(valid) {
  let new_status = valid === true ? "valid" : "invalid";
  pwd2.dataset.status = new_status;
}
