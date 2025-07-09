const obtenerInformacion = (materia)=>{
    materias={
        fisica: ["Chava","julian","leo","juan","Alexis","La puta de samuel"],
        programacion: ["Gey","juan","Alexis","La puta de samuel"],
        logica: ["Mario","julian","leo","juan","La puta de samuel"],
        nachitobb: ["nachoGOD","julian","leo","juan","Alexis"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion){
        let profesor = obtenerInformacion(materia)[0][0];
        let alumnos = obtenerInformacion(materia)[0];
        alumnos.shift();
        document.write(`Alumnos presentes en la materia de <b style='color:blue'>${informacion[1]}</b> 
            impartida por <b style='color: green'>${profesor}</b>:<br> 
            <b>${alumnos}<b><hr>`);
    }else{
        document.write("hola");
    }
}

const CantClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let cantidadTotal= 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
        }
    }
    return `El alumno ${alumno} esta en ${cantidadTotal} clases`;
}

mostrarInfo("fisica");
mostrarInfo("nachitobb");
mostrarInfo("logica");
mostrarInfo("programacion");

document.write(CantClases("Alexis"));