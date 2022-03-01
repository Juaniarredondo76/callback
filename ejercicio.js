 //DECLARACION DE LA FUNCION PRINCIPAL
 function sumar(numero1,numero2,callback){
     
     setTimeout(function(){
        let suma=numero1+numero2
        //llamar al calback
        callback(numero1,numero2,suma)                   
},5000)
}
//LLAMAR FUNCION PRINCIPAL
sumar(5,5,function(numero1,numero2,suma){
    //1-muestro la suma
    console.log(`la suma es: ${suma}`) 
    //2-calculo la resta
    let resta=numero1-numero2
    //3-muestro la resta
    console.log(`la resta es: ${resta}`)

})



