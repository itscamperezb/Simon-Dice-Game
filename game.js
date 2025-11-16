var colors = ["blue", "red", "yellow", "green"];
var secuenciaAleatoria = [];
var secuenciaUsuario = [];
var nivel = 0;
var start = false;

//Este es simplemente el codigo para hacer que cada vez de haga click en un boton (el cual tiene la clase btn)
//también se active las funciones "sonidos", "animacionBoton" y "validarSecuencia"
$(".btn").click(function () {
  var colorSeleccionado = $(this).attr("id");
  secuenciaUsuario.push(colorSeleccionado);

  sonidos(colorSeleccionado);
  validarSecuencia(secuenciaUsuario.length - 1);
  animacionBoton(colorSeleccionado);
});
//------------------------------------------------------------------------------------------------------
// Este codigo permite iniciar el juego al precionar cualquier tecla, cmabia el valor de start a true,
// el condicional if es para detectar que el valor de start sea falso,
// si se cumple esto entonces llamará a la función "eleccionAleatoria"
$(document).keypress(function () {
  if (!start) {
    eleccionAleatoria();
    start = true;
  }
});
//------------------------------------------------------------------------------------------------------
//La primera activación de esta función será cuando se cumpla start = true
function eleccionAleatoria() {
  secuenciaUsuario = [];
  nivel++;
  $("#level-title").text("nivel " + nivel);
  const colorAleatorio = colors[Math.floor(Math.random() * 4)];

  secuenciaAleatoria.push(colorAleatorio);
  console.log(secuenciaAleatoria);

  sonidos(colorAleatorio);
  animacionBoton(colorAleatorio);
}
//-------------------------------------------------------------------------------------------------
//La primera activación de esta función será cuando se cumpla start = true, una vez esto ocurra las siguientes
//llamadas serán cuando en la función "validarSecuencia" se cumpla la condición secuenciaAleatoria[i] === secuenciaUsuario[i]
function validarSecuencia(respuestaNivel) {
  if (secuenciaAleatoria[respuestaNivel] === secuenciaUsuario[respuestaNivel]) {
    console.log("correcto");
    if (secuenciaAleatoria.length === secuenciaUsuario.length) {
      setTimeout(function () {
        eleccionAleatoria();
      }, 1000);
    }
  } else {
    animacionGameover();
  }
}
function sonidos(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animacionBoton(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function animacionGameover() {
  sonidos("wrong");
  $("#body").addClass("game-over");
  setTimeout(function () {
    $("#body").removeClass("game-over");
  }, 200);
  $("#level-title").text("GAME OVER, presiona cualquier tecla para reiniciar");

  reiniciar();
}

function reiniciar() {
  secuenciaAleatoria = [];
  nivel = 0;
  start = false;
}
