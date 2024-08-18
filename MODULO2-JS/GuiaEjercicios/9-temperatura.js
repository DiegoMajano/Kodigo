/**
 * 
 * Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
 * Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
    • Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
    • Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
    • Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
    • Si no está entre ningún caso anterior la frase “Temperatura desconocida”
 * 
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function toFahrenheit(temperaturaC) {
    return temperaturaC * (9 / 5) + 32;
}

function verPrograma(){
    let pregunta = "Digitar la temperatura en °Celcius: "

    rl.question(pregunta, (respuesta) => {
        
        let temperaturaC = parseFloat(respuesta);

        let temperaturaF = toFahrenheit(temperaturaC);
        let result = "";

        if(temperaturaF >= 14 && temperaturaF < 32){
            result = `Temperatura baja [${temperaturaF}°F]`;            
        } else if(temperaturaF >= 32 && temperaturaF < 68){
            result = `Temperatura adecuada [${temperaturaF}°F]`;            
        } else if(temperaturaF >= 68 && temperaturaF < 96){
            result = `Temperatura alta [${temperaturaF}°F]`;            
        } else{
            result = `Temperatura desconocida [${temperaturaF}°F]`;            
        }
        console.log(result);
        rl.close();
    })
}

verPrograma();

