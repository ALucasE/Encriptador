/*-Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function encriptar() {
  var entrada = document.getElementById("entrada").value.toLowerCase(); //tomar valor del imput

  var resultado = entrada.replace(/e/gim, "enter"); //cambia las e por enter
  var resultado = resultado.replace(/o/gim, "ober"); //cambia las o por ober
  var resultado = resultado.replace(/i/gim, "imes"); //cambia las i por imes
  var resultado = resultado.replace(/a/gim, "ai"); //cambia las a por ai
  var resultado = resultado.replace(/u/gim, "ufat"); //cambia las u por ufat
  //.replace(gim) Afecta mayusculas como minusculas a toda la linea y parrafos

  document.getElementById("imgDer").style.display = "none"; //oculta imagen de la derecha
  document.getElementById("texto").style.display = "none"; //oculta el texto de la derecha
  document.getElementById("resultado").innerHTML = resultado; //inserta el resultado en la textArea
  document.getElementById("copiar").style.display = "show"; //Muestra el boton de copiar
  document.getElementById("copiar").style.display = "inherit"; //oculta imagen de la derecha
}
function desencriptar() {
  var entrada = document.getElementById("entrada").value.toLowerCase();
  var resultado = entrada.replace(/enter/gim, "e");
  var resultado = resultado.replace(/ober/gim, "o");
  var resultado = resultado.replace(/imes/gim, "i");
  var resultado = resultado.replace(/ai/gim, "a");
  var resultado = resultado.replace(/ufat/gim, "u");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("resultado").innerHTML = resultado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#resultado");
  contenido.select();
  document.execCommand("copy");
  alert("Se copio el texto!");
}
