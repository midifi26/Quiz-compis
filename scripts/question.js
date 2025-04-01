document.addEventListener("DOMContentLoaded", () => {

    const botonInicio = document.getElementById("comienzo-quiz");
    if(botonInicio){
        botonInicio.addEventListener("click", () => {
            window.location.href = "../pages/question.html"
        })
    }
    iniciarQuiz()
})

async function getData() { //Llamada a la API para conseguir las preguntas y respuestas
    try{
        const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple");
        if(!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();
        if(!data.results){
            throw new Error("No se obtuvieron las preguntas de la API")
        }
        iniciarQuiz(data.results); //Iniciamos la función con los datos recogidos
    } catch (error) {
        console.error("Error al obtener las preguntas: ", error.message)
    }
}

function iniciarQuiz(preguntas) { //Iniciamos la función con el parámetro preguntas para que las reciba desde la API
    let indicePregunta = 0;
    let marcador = 0;
    let numeroMarcador = document.getElementById("numero-marcador");

    const incrementoMarcador = num => { //función para meter la suma de los aciertos en el marcador
        marcador += num;
        numeroMarcador.innerText = marcador;
        localStorage.setItem("Marcador", marcador); //Mandamos la puntuación a Local Storage
    }

    function pintarPregunta() {
        if (indicePregunta >= preguntas.length) {  //Condicional para determinar si el usuario ha llegado al final del quiz
            alert("Has terminado el juego");
            return window.location.assign("../pages/results.html"); //Nos lleva directamente a la página de resultados tras el alert
        }

        const preguntaActual = preguntas[indicePregunta]; //Seleccionamos la pregunta actual (índice 0)
        if(!preguntaActual){ 
            console.error(`No se pudo obtener la pregunta en el índice ${indicePregunta}`)
        }

        const cajaPregunta = document.getElementById("preguntas");
        const cajaRespuestas = document.getElementById("respuestas");
        cajaPregunta.innerHTML = `<h2>${preguntaActual.question}</h2>`; //Pintamos las cajas con la pregunta de la API
        cajaRespuestas.innerHTML = "";

        shuffleArray([preguntaActual.correct_answer, ...preguntaActual.incorrect_answers]) //suffleArray mezcla las preguntas correctas e incorrectas
            .forEach(opcion => {
                const btn = document.createElement("button");
                btn.textContent = opcion;
                btn.classList.add("button");

                btn.onclick = () => {
                    if(opcion === preguntaActual.correct_answer){
                        btn.style.backgroundColor = "green"; //Se pinta el fondo de verde si acierta
                        incrementoMarcador(10) //Sumamos a la puntuación 10 puntos
                    } else {
                        btn.style.backgroundColor = "red"
                    }

                    setTimeout(() => { //Damos un tiempo para pasar a la siguiente pregunta
                        indicePregunta++;
                        pintarPregunta();
                    }, 1000)
                };
                cajaRespuestas.appendChild(btn);
            });
    }
    pintarPregunta();
}


function shuffleArray(array) {
    return array.sort(() => Math.random()); //Función para que nos dé preguntas y resuestas aleatorias
}

getData();