
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
<<<<<<< HEAD
});

let acertadas = ""; 
let falladas = 100 - acertadas;

function graficaRespuestas() {
    var data = {
        series: [acertadas, falladas]
    };

    var optionsWithColors = {
        labelOffset: 50,
        labelDirection: 'explode',
        chartPadding: 10,
        startAngle: 270,
        total: 100,
        showLabel: true,
        donut: false, 
        colors: ['', ''], //Colores a elegir
    };

    var responsiveOptions = [
        ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
                return value;
            }
        }],
        ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
        }]
    ];

    // Crear el gráfico de tipo dona usando los datos, opciones y responsiveOptions
    new Chartist.Pie('#grafica', data, optionsWithColors, responsiveOptions);
}

graficaRespuestas();


/*function playAgain(){
    const botonJugarOtraVez = document.getElementById("button-playAgain");
    if(botonJugarOtraVez){
        botonJugarOtraVez.addEventListener("click", () => {
            window.location.href = "./pages/question.html"
        })
    }
}
playAgain()*/

=======
});
>>>>>>> def6de9f9d82353c84b33291279f21ea488bfd11
