
// base de datos simulada
    const user = "a";
    const pass_paciente = "b";

//funcion solicitar datos
    function  solicitarDatos(){
    let resp = confirm("Ya estas registrado ? "); 
    let usuario = prompt ("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");
    
    

    if (validarDatos (usuario,pass)){
       
        alert("Paciente:" + " " + persona1.nombre + " " + "Edad:" + " " + persona1.edad + " " + "Diagnostico:" + " " + persona1.diagnostico);
        iniciarTurno();


    }else{

        alert("Usuario y/0 contraseña invalida");

    }

}

//funcion validar datos 
    function validarDatos(usuario,pass){

    if (usuario ===  user && pass === pass_paciente ){


        return true ;

    }else {


        return false ;

    }

}

//objeto
    function persona (nombre, edad, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.diagnostico = diagnostico;
}  
    const persona1 = new persona ("Esteban Tauil", 36, "Cervicalgia")
    persona1.edad = 37

    localStorage.setItem('paciente',["Esteban Tauil", "edad", 37, "Diagnostico: Cervicalgia"]);
    const enJSON = JSON.stringify(persona1);
    localStorage.setItem("paciente1", enJSON);
    
 
//arreglo
    let datoIngresado = confirm("Desea Ingresar Estudios Complementarios?");
    const todosLosDatos =[];
    function agregarDatos(){

       const datoAgregado = prompt("Ingrese el Estudio complementario que disponga");
       todosLosDatos.push(datoAgregado)
       console.log(todosLosDatos)

  }
    function quitarDatos(){
    const datoAquitar = prompt("Que Estudio Complementario desea Quitar?");
    const existeDato = todosLosDatos.includes (datoAquitar);
        if (existeDato){
            const indexDato = todosLosDatos.indexOf(datoAquitar);
            todosLosDatos.splice(indexDato, 1)
        }else{
            alert("este dato no existe")
    }

  }
  
        while (datoIngresado){
    
            agregarDatos();
            datoIngresado = confirm ("Quiere ingresar otro Estudio Complementario?")
  }
    let confirmQuitar = confirm("Quiere quitar algun Estudo Complementario?");
        while (confirmQuitar){
            quitarDatos();
            confirmQuitar = confirm ("Quiere quitar otro Estudio Complementario?")
  }
            console.log(todosLosDatos)


//funcion tur1nos
    function iniciarTurno(){


        let lista = "" ;

        let finalizar_turno = false ;


        while (!finalizar_turno){


            let cod = prompt("Ingrese codigo de turno");
            let turno = obtenerTurno(cod);


        if (turno){

            alert("Su turno es el Día "+turno);
            lista += "\n"+turno;
            finalizar_turno = true ;


        }else{

            if (cod === null){

                finalizar_turno = true ;


            }else {


                alert("Ingrese un código de turno válido");
            
            }

        }

    }

         if (lista != ""){

            let resp = confirm ("Desea confirmar su Turno ?"+lista);

         if (resp){

            alert("Gracias por elegirme!!! Indique el tratamiento a realizar...");


        }


    }

}


//funcion Obtener Turno
    function obtenerTurno(cod){ 


    let turnos  ;
    
    switch(cod){

        case "1" : 
                    turno = "Martes 15/10. 14hs";
                    break;
        case "2" : 
                    turno = "Martes 15/10. 15hs";
                    break;
        case "3" : 
                    turno = "Jueves 17/10. 14hs" ;
                    break;
        case "4" : 
                    turno = "Jueves 17/10. 15hs"
                    break;       

         default :
                    turno = false;           

    }


   return turno ;  

}
//metodo busqueda filter
    const turnos = [
        {diaHorario:"Martes 15/10. 14hs"},
        {diaHorario:"Martes 15/10. 15hs"},
        {diaHorario:"Jueves 17/10. 14hs"},
        {diaHorario:"Jueves 17/10. 14hs"},
]


    const resultado = turnos.filter((el) => el.diaHorario.includes('Martes 15/10. 15hs'))
        console.log(resultado)

// cuadno esta todo cargado se le pide datos al usuario
    document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});



