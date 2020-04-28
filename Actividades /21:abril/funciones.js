let coloreado = false
let subrayado = false

function pedirNombre(){
  let nombre = prompt("Cual es tu nombre?");
  document.getElementById("saludo").innerHTML = "Hola " + nombre + "!"
}

function cambiarColor(){
  console.log("Dieron click");
  let etiqueta = document.getElementById("saludo") ;
  etiqueta.classList.add("letrasRojas")
}

function colorear(){
  let texto = document.getElementById("saludo")

  if(coloreado == false){
    text.classList.add("letrasRojas")
    coloreado = true
  }
  else{
    texto.classList.remove("letrasRojas")
    coloreado = false
  }
}
function subrayar(){
  let texto = document.getElementById("saludo")

  if (subrayado == false) {
    texto.classList.add("subrayar")
    subrayado = true
  }
  else {
    texto.classList.remove("subrayar")
    subrayado = false
  }
}
