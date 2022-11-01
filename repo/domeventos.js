let newTratamiento = document.getElementById("tratamientoArealizar");
let addBtn = document.getElementById("agregarTratamiento");
let lista = document.getElementById("lista");



let arreglo_items = new Array() ;
arreglo_items.push("Osteopatía");
arreglo_items.push("Quiropraxia");
arreglo_items.push("MEP");
arreglo_items.push("Acupuntura");
arreglo_items.push("Puncion Seca");




cargar_lista();

function cargar_lista(){

    for (let i = 0 ; i< arreglo_items.length ; i++){


        let item = arreglo_items[i];
        agregar_item(item);

    }


}


function agregar_item(item){


    
    let li = document.createElement("li");

    

    li.addEventListener("click",()=>{

        
        if (li.style.textDecoration === "underline"){

            li.style.textDecoration = 'none';
            

        }else{

            li.style.textDecoration = 'underline';

        }


    })

    

    li.textContent = item;
    
    lista.appendChild(li);


}


addBtn.addEventListener("click",()=>{

   let input =  newTratamiento.value ;

   agregar_item(input);

   newTratamiento.value = "" ;  



})





