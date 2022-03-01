function resibirUsuario(nombre,edad,pass,callback){
    setTimeout(function(){
        let usuario={
            nombre:nombre,
            edad:edad,
            password:pass
        }
        callback(usuario)
    },3000)
}
resibirUsuario("james",15,"1001578277",function(usuario){
    if (usuario.edad>=18){

        console.log("Bienvenido" + usuario .nombre)
    }
    else{

        console.log("no eres bienvenido" + usuario . nombre,"¡gonorrea!")
        
    }
})