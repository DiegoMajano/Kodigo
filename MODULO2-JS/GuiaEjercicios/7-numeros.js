/*
 *
 *Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
    • La cantidad de valores negativos ingresados.
    • La cantidad de valores positivos ingresados.
    • La cantidad de múltiplos de 15.
    • El valor acumulado de los números ingresados que son pares.
 *  
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let contador = 0;

function preguntarNumero(){
    if (contador < 10) {
        rl.question(`Ingresar número ${contador+1}: `, (respuesta) => {
          numeros.push(parseInt(respuesta));
          contador++;
          preguntarNumero();
        });
    } else {
        console.log('Números ingresados:', numeros);
        for(let numero of numeros){
            if(numero > 0) positivos++;
            if(numero < 0) negativos++;
            if(numero % 15 === 0) multiplos15++;
            if(numero % 2 === 0) pares++;
        }
        console.log(`De los 10 números ingresados hay ${positivos} positivos, ${negativos} negativos, ${multiplos15} multiplos de 15 y ${pares} pares.`);
        rl.close();
    }

}
let positivos = 0;
let negativos = 0;
let multiplos15 = 0;
let pares = 0;

preguntarNumero();