document.addEventListener("DOMContentLoaded", () => {

    const botonSiguiente = document.getElementById("next-button");
    if(botonSiguiente){
        botonSiguiente.addEventListener("click", () => {
            window.location.href = "./pages/results.html"
        })
    }
});



/*function playAgain(){
    const botonJugarOtraVez = document.getElementById("button-playAgain");
    if(botonJugarOtraVez){
        botonJugarOtraVez.addEventListener("click", () => {
            window.location.href = "./pages/question.html"
        })
    }
}
playAgain()*/
