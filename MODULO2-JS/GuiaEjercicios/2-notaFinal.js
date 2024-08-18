/**
 * Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: 
    • Examen =20%
    • tareas = 40%
    • asistencia = 10%
    • investigación = 30%
 * Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
 */

let alumno = { nombre: "Diego Rodríguez", carnet: "RM220481", notaFinal: 0.0}
let notasRegistradas = [9,5,7,4]

function determinarNotaFinal(alumno, notasRegistradas){
    let porcentajeExamen = 0.2;
    let porcentajeTareas = 0.4;
    let porcentajeAsistencia = 0.1;
    let porcentajeInvestigacion = 0.3;

    let notaExamen = notasRegistradas[0]*porcentajeExamen;
    let notaTareas = notasRegistradas[1]*porcentajeTareas;
    let notaAsistencia = notasRegistradas[2]*porcentajeAsistencia;
    let notaInvestigacion = notasRegistradas[3]*porcentajeInvestigacion;

    let notaFinal = notaExamen + notaTareas + notaAsistencia + notaInvestigacion;
    alumno.notaFinal = notaFinal.toFixed(2);

    console.log(`El alumno ${alumno.nombre} con carnet ${alumno.carnet} tiene nota de: ${alumno.notaFinal}`);
}

determinarNotaFinal(alumno, notasRegistradas);