/**
 * 
 * Se cuenta con la siguiente información: 
    • Las edades de 5 estudiantes del turno mañana. 
    • Las edades de 6 estudiantes del turno tarde. 
    • Las edades de 11 estudiantes del turno noche. 
 * Nota: Las edades de cada estudiante se deberán ingresar por la web. 
 * Lo que queremos devolver:
    • Obtener el promedio de las edades de cada turno (tres promedios).
    • Imprimir dichos promedios (promedio de cada turno).
    • Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor
 * 
 */

const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntarEdades(cantidad){

    return new Promise((resolve,reject) =>{
        let edades = [];
        let contador = 0;

        function preguntar(){

            if(contador < cantidad){
                rl.question(`Ingresar edad ${contador+1}: `, (respuesta) => {
                    const edad = parseInt(respuesta);
                    if(isNaN(edad)) {
                        console.log("Ingresar número váldo");                        
                        preguntar();
                    } else{
                        edades.push(parseInt(respuesta));
                        contador++;                                                                     
                        preguntar();
                    }
                  });
            } else{
                resolve(edades);
            }
        }
        preguntar();
    })    
}


let edadesMañana = [];
let edadesTarde = [];
let edadesNoche = [];

let promedioMañana = 0.0;
let promedioTarde = 0.0;
let promedioNoche = 0.0;

let resultado = [];

async function ingresarDatos() {

    try{
        // inicializar edades de los estudiantes por cada turno
    
        console.log("Bienvenido, se ingresarán 3 registros diferentes por turnos \n Ingresar los 5 estudiantes del turno de la mañana");    
        edadesMañana = await preguntarEdades(5);
    
        console.log("Ingresar los 6 estudiantes del turno de la tarde");
        edadesTarde = await preguntarEdades(6)
    
        console.log("Ingresar los 11 estudiantes del turno de la noche");
        edadesNoche = await preguntarEdades(11)

        rl.close();
    
        for(let edad of edadesMañana){
            promedioMañana += edad;
        }
        for(let edad of edadesTarde){
            promedioTarde += edad;
        }
        for(let edad of edadesNoche){
            promedioNoche += edad;
        }
    
        promedioMañana = promedioMañana / edadesMañana.length;
        promedioTarde = promedioTarde / edadesTarde.length;
        promedioNoche = promedioNoche / edadesNoche.length;

        console.log(`El promedio del turno de la mañana es: ${promedioMañana}`);
        console.log(`El promedio del turno de la tarde es: ${promedioTarde}`);
        console.log(`El promedio del turno de la noche es: ${promedioNoche}`);     

    
        // verificar si los 3 promedios son iguales
        if(promedioMañana === promedioTarde && promedioMañana === promedioNoche) resultado = ["Promedios iguales", promedioMañana];
    
        // verificar si hay 2 iguales
        else if(promedioMañana === promedioTarde && promedioMañana > promedioNoche) resultado = ["Turno mañana y tarde", promedioMañana];
        else if(promedioMañana === promedioNoche && promedioMañana > promedioTarde) resultado = ["Turno mañana y noche", promedioMañana];
        else if(promedioTarde === promedioNoche && promedioTarde > promedioMañana) resultado = ["Turno tarde y noche", promedioTarde];
        
        // verificar cual es mayor
        else if(promedioMañana > promedioTarde && promedioMañana > promedioNoche) resultado = ["Turno mañana", promedioMañana];
        else if(promedioTarde > promedioNoche && promedioTarde > promedioMañana) resultado = ["Turno tarde", promedioTarde];
        else if(promedioNoche > promedioMañana && promedioNoche > promedioTarde) resultado = ["Turno noche", promedioNoche];
    
        console.log(`El promedio mayor es del turno: ${resultado[0]} con una cantidad de: ${resultado[1]}`);

        return resultado;
    } catch (error){
        console.error("Error:", error)
    }
}

ingresarDatos();