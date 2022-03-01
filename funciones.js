//function sumar(numero1,numero2,numero3){
  //  return numero1 + numero2 + numero3
//}
//console.log (sumar(5,4,7))

function iniciar(){
    console.log("estoy iniciando el programa")
}

function procesar(){

    setTimeout(function(){
        console.log("estamos procesando el porgrama ")
    },3000)  
}

function finalizar(){
    console.log("estamos finalizando el programa ")
}

//llamando a mis funciones 
iniciar ()
procesar()
finalizar()
