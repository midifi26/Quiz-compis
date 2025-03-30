document.addEventListener("DOMContentLoaded", function(){
    let preguntas = [ //Variables donde almacenar las preguntas y la puntuación
        {
            pregunta: "¿Sobreviviremos al Quiz?",
            opciones: ["¡Claro!", "Ya veremos...", "Está jodido", "Ni de coña"],
            correcta: "Ni de coña"
        },
        {
            pregunta: "¿Has dormido?",
            opciones: ["Sí, 12 horas", "Un poco", "A ratos", "Voy de empalme"],
            correcta: "Sí, 12 horas"
        },
        {
            pregunta: "¿Y comido?",
            opciones: ["Sí, 3 hamburguesas", "Un poco", "No, pero me he bebido 10 Monster", "Estoy en ramadán"],
            correcta: "No, pero me he bebido 10 Monster"
        }
    ]
    
    
    let preguntaActual = 0;
    let puntuacion = 0;
    
    const preguntaElemento = document.getElementById("preguntas"); //Seleccionamos los elementos donde meter las preguntas, opciones
    const respuestaElementos = document.querySelectorAll(".respuesta"); //y puntuación
    const puntuacionElemento = document.getElementById("puntuacion")
    
    //Función con la que pintamos la pregunta
    function pintarPregunta(){
        if(preguntaActual >= preguntas.length){ //Condicional para determinar si el juego ha terminado
            preguntaElemento.textContent = "¡El juego ha terminado!";
            return;
        }
    
        const preguntaData = preguntas[preguntaActual];
        preguntaElemento.textContent = preguntaData.pregunta; //Mostramos la pregunta
    
        respuestaElementos.forEach((respuesta, index) => { //Recorremos los elementos de las opciones y las asignamos a sus div
            respuesta.textContent = preguntaData.opciones[index]; 
            respuesta.dataset.index = index; //Asignamos un índice a cada opción
            console.log(respuesta.textContent)
        })
    }
    
    respuestaElementos.forEach(respuesta => { //forEach para verificar si es correcta y sumar puntos
        respuesta.addEventListener("click", (evento) => {
            console.log("Respuesta seleccionada:", evento.target.textContent)
            const indiceSeleccionado = parseInt(evento.target.dataset.index) //Guardamos el índice y lo convertimos en Int
            const preguntaData = preguntas[preguntaActual];
    
            if(preguntaData.opciones[indiceSeleccionado] === preguntaData.correcta){ //Condicional para verificar su la respuesta seleccionada es correcta
                puntuacion += 10
                puntuacionElemento.textContent = `Tu puntuación: ${puntuacion}`
    
            }
            preguntaActual++; //Pasamos a la siguiente pregunta
            pintarPregunta()
        })
    })
})



//Quedaría llamar a la función con la llamada a la API