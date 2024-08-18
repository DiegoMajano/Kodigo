/*
Crear una función que en base a la edad que ingreso el usuario devolver un 
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.

*/

function VerificarEdad(edad){
    return edad >= 18 ? "Es mayor de edad" : "Es menor de edad"
}

console.log(VerificarEdad(18));
console.log(VerificarEdad(10));
console.log(VerificarEdad(34));





