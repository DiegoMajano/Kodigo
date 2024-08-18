/**
 * 
 * Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.
 *  
 */

// para leer en consola:



function calularMayor(a,b){
    if(a > b){
        return a
    } else if (a < b){
        return b
    } else{
        return "son iguales"
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i =1;
let pregunta = `Ingresa el número ${i}: `;
let numero1;
let numero2;
console.log("Bienvenido, ingresa 2 números y calcularé cual es mayor");

rl.question(pregunta, (respuesta) => {
    i++;
    numero1 = parseFloat(respuesta);
    rl.question(pregunta, (respuesta) => {
        i++;
        numero2 = parseFloat(respuesta);

        let resultado = calularMayor(numero1, numero2);
        if(resultado === "son iguales"){
            console.log("Los números ingresados son iguales");
        } else{
            console.log(`El número mayor es: ${resultado}`);
            
        }

        rl.close();
    });

});
