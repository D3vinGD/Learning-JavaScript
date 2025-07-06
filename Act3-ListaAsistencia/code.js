let cantidad = prompt("Cuantos alumnos hay?")
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt(`Nombre A${i + 1}: `), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (let i = 0;i < 30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado =  `${alumnosTotales[alumno][0]}: <br>
    -------Asistencias: ${alumnosTotales[alumno][1]} <br>
    -------Inasistencias: ${30 - alumnosTotales[alumno][1]}
    `;
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado += "<br><b style= 'color: crimson'>Reprobado por Inasistencias </b><br>";
    }else{
        resultado += "<br><br>";
    }
    document.write(resultado);
}
