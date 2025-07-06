let free = false;

const validarCliente =  (time)=> {
    let edad = prompt("cual es tu edad? ");
    if (edad > 18){
       if (time >= 2 && time < 7 && !free){
            alert("che pasa invita la casa");
            free = true;
       }else{
            alert("pagame la entrada");
       }
    } else{
        alert("Che regresar pa casa");
    }
}
