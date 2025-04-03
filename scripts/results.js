
document.addEventListener("DOMContentLoaded", () => {
  let puntuacion = localStorage.getItem("Marcador"); //Recuperamos la puntuación de Local Storage
  if (puntuacion) {
    const containerPuntuacion = document.getElementById("container-puntuacion");
    containerPuntuacion.textContent = `Tu puntuación es ${puntuacion}`;
  } else {
    console.log("No se ha encontrado la puntuación");
  }
  let acertadas = puntuacion;
  let falladas = 100 - acertadas;

  function graficaRespuestas() {
    let data = {
      series: [acertadas, falladas],
    };

    let optionsWithColors = {
      labelOffset: 50,
      labelDirection: "explode",
      chartPadding: 10,
      startAngle: 270,
      total: 100,
      showLabel: true,
      donut: false,
      
    };

    let responsiveOptions = [
      [
        "screen and (min-width: 640px)",
        {
          chartPadding: 30,
          labelOffset: 100,
          labelDirection: "explode",
          labelInterpolationFnc: function (value) {
            return value;
          },
        },
      ],
      [
        "screen and (min-width: 1024px)",
        {
          labelOffset: 80,
          chartPadding: 20,
        },
      ],
    ];

    // Crear el gráfico de tipo dona usando los datos, opciones y responsiveOptions
    new Chartist.Pie("#grafica", data, optionsWithColors, responsiveOptions);
  }

  graficaRespuestas();

  if (botonSiguiente) {
    botonSiguiente.addEventListener("click", () => {
      window.location.href = "./pages/results.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => { //Función para empezar el quiz de nuevo

  const botonJugardeNuevo = document.getElementById("button-playAgain");
  if(botonJugardeNuevo){
      botonJugardeNuevo.addEventListener("click", () => {
        window.location.href = "/index.html"
      })
  }
})


const musicControl = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');
const backgroundMusic = document.getElementById('background-music');

//Este if hace que la musica este encendida al cargar la pagina
if (backgroundMusic.paused || backgroundMusic.ended) {
  backgroundMusic.play(); 
  musicIcon.textContent = '⏸️';
}
//Boton musica para pausar y reproducir la musica
musicControl.addEventListener('click', () => {
  if (backgroundMusic.paused || backgroundMusic.ended) {
    backgroundMusic.play();
    musicIcon.textContent = '⏸️'; // Cambiar a icono de pausa
  } else {
    backgroundMusic.pause();
    musicIcon.textContent = '▶️'; // Cambiar a icono de play
  }
});