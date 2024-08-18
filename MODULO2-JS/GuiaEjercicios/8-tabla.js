/**
 * 
 * Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.
 * 
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarTablaMultiplicar(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${i*numero}`);
    }
}

let pregunta = "Ingrese un número para generar su tabla de multiplicar: ";

rl.question(pregunta, (respuesta) => {
    let numero = parseInt(respuesta);
    mostrarTablaMultiplicar(numero);

    rl.close();
})