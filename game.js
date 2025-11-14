var colors = ["blue", "red", "yellow", "green"];
var seccuenciaAleatoria = [];
var secuenciaUsuario = [];

$(".btn").click(function () {
  var colorSeleccionado = $(this).attr("id");
  secuenciaUsuario.push(colorSeleccionado);

  console.log(colorSeleccionado);
  sonidos;
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

function sonidos(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}
