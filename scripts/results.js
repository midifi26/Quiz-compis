document.addEventListener("DOMContentLoaded", () => {

    let puntuacion = localStorage.getItem("Marcador"); //Recuperamos la puntuación de Local Storage
    if(puntuacion){
        const containerPuntuacion = document.getElementById("container-puntuacion");
        containerPuntuacion.textContent = `Tu puntuación es ${puntuacion}`
    } else {
        console.log("No se ha encontrado la puntuación")
    }

    if(botonSiguiente){
        botonSiguiente.addEventListener("click", () => {
            window.location.href = "./pages/results.html"
        })
    }
});