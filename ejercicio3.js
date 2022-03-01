function almacenar(numero1,numero2,numero3,numero4,numero5,callback){
            let arreglo=Array(
                numero1,
                numero2,
                numero3,
                numero4,
                numero5
            )
            callback(arreglo)
}
almacenar (1,1,1,1,1,function(arreglo){

     let contador=0
     arreglo.forEach(function(arreglo){
         contador=contador+arreglo
     })

     console.log("la sumatoria es: " + contador + " baby")

})