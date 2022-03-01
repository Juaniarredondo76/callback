function funcionPrincipal(callback){
    setTimeout(function(){
        console.log("Soy la funcion principal")
      callback()
    },2000)
}
funcionPrincipal(function(){
    console.log("Soy la segunda funcion ")
})