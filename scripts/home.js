const containerNombreUsuario = document.getElementById("container-nombreUsuario")
const inputNombreUsuario = document.createElement("input")
inputNombreUsuario.placeholder = "Introduce tu nombre"
inputNombreUsuario.type = "text"
containerNombreUsuario.appendChild(inputNombreUsuario)

//Recuperamos de Local Storage el nombre si existe
inputNombreUsuario.value = localStorage.getItem("Nombre") || "";

inputNombreUsuario.value = "";

const containerCorreoUsuario = document.getElementById("container-correoUsuario")
const inputCorreoUsuario = document.createElement("input")
inputCorreoUsuario.placeholder = "Introduce tu correo"
inputCorreoUsuario.type = "email"
containerCorreoUsuario.appendChild(inputCorreoUsuario)

//Hacemos lo mismo con el correo
inputCorreoUsuario.value = localStorage.getItem("Correo") || "";

inputCorreoUsuario.value = "";

const botonInicio = document.getElementById("comienzo-quiz");

//Mandamos el nombre y el correo a Local Storage según se pulsa el botón empezar quiz
botonInicio.addEventListener("click", () => {
    const nombre = inputNombreUsuario.value.trim();
    const correo = inputCorreoUsuario.value.trim();

    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Correo", correo);

    window.location.href = "../pages/question.html" //Cuando se pulsa el botón nos lleva a pages
})
