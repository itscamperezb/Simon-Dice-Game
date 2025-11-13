const colors = ["blue", "red", "yellow", "green"];
const seccuenciaAleatoria = [];
const secuenciaUsuario = [];

$(".btn").click(function () {
  var eleccionJugador = $(this).attr("id");
  console.log(eleccionJugador);
  secuenciaUsuario = secuenciaUsuario.push(eleccionJugador);

  sonidos(eleccionJugador);
});

// function secuenciaAleatoria() {
//   const arrayAleatorio = [];
//   const colorAleatorio = colors[Math.floor(Math.random() * 4)];

//   arrayAleatorio.push(colorAleatorio);

//   sonidos(colorAleatorio);
// }

// function validarSecuencia() {
//   for (let i = 0; i < secuenciaAleatoria.length; i++) {
//     if (secuenciaAleatoria[i] === secuenciaUsuario[i]) {
//       secuenciaAleatoria();
//     } else {
//     }
//   }
// }

function sonidos(eleccionJugador) {
  const rutaSonido = "sounds/" + eleccionJugador + ".mp3";
  console.log("Intentando reproducir:", rutaSonido);
  
  const audio = new Audio(rutaSonido);
  audio.volume = 1.0;
  
  audio.play().catch(function(error) {
    console.error("❌ Error al reproducir sonido:", error);
  });
  
  audio.oncanplay = function() {
    console.log("✅ Sonido listo para reproducir");
  };
  
  audio.onerror = function() {
    console.error("❌ Error al cargar el archivo:", rutaSonido);
  };
}
