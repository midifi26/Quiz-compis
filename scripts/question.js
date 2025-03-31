document.addEventListener("DOMContentLoaded", () => {

    const botonInicio = document.getElementById("comienzo-quiz");
    if(botonInicio){
        botonInicio.addEventListener("click", () => {
            window.location.href = "./pages/question.html"
        })
    }
    iniciarQuiz()
})

async function getData() { //Llamada a la API para conseguir las preguntas y respuestas
    try{
        const response = await fetch("../json/questions.json");
        if(!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        iniciarQuiz(data.results); //Iniciamos la función con los datos recogidos
    } catch (error) {
        console.error("Error al obtener las preguntas: ", error.message)
    }
}

function iniciarQuiz(preguntas) { //Iniciamos la función con el parámetro preguntas para que las reciba desde la API
    let indicePregunta = 0;

    function pintarPregunta() {
        if (indicePregunta >= preguntas.length) {  //Condicional para determinar si el usuario ha llegado al final del quiz
            alert("Has terminado el juego");
            return;
        }

        const preguntaActual = preguntas[indicePregunta]; //Seleccionamos la pregunta actual (índice 0)
        const cajaPregunta = document.getElementById("preguntas");
        const cajaRespuestas = document.getElementById("respuestas");

        cajaPregunta.innerHTML = `<h2>${preguntaActual.question}</h2>`; //Pintamos las cajas
        cajaRespuestas.innerHTML = "";

        shuffleArray([preguntaActual.correct_answer, ...preguntaActual.incorrect_answers]) //suffleArray mezcla las preguntas correctas e incorrectas
            .forEach(opcion => {
                const btn = document.createElement("button");
                btn.textContent = opcion;
                btn.classList.add("button");
                btn.onclick = () => {
                    btn.style.backgroundColor = opcion === preguntaActual.correct_answer ? "green" : "red"; //Ternario para pintar el fondo de verde o rojo
                };
                cajaRespuestas.appendChild(btn);
            });
    }

    document.getElementById("next-button")?.addEventListener("click", () => { //Evento click para pasar a la siguiente pregunta
        indicePregunta++;
        pintarPregunta();
    });

    pintarPregunta();
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5); //El -0.5 asegura que el orden del .sort sea aleatorio
}

getData();