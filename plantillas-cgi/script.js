// Obtener los parámetros de la URL y convertirlos de nuevo a un objeto
const params = new URLSearchParams(window.location.search);
const datosString = params.get('datos');
const datos = JSON.parse(datosString);

// Mostrar los datos en la página
