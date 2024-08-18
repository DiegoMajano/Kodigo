/*
 *
 * A ---> 15%
 * B ---> 30%
 * C ---> 10%
 * D ---> 20% 
 * 
 *  Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
 * Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
 * aumento. Deberá demostrar los datos del empleado y el aumento salarial.
 * 
 */

function calcularAumento(nombre, categoria, salario){
    const AUMENTOS = { A: 0.15, B: 0.30, C: 0.10, D: 0.20};
    let aumentoEmpleado = 0;
    let salarioFinal = 0;
    categoria = categoria.toUpperCase();

    // verificar si existe aumento para la categoria ingresada
    if( categoria != "A" && categoria != "B" && categoria != "C" && categoria != "D"){
        return `No existe aumento salarial para la categoria "${categoria}", el empleado ${nombre} mantedrá su salario: ${salario}`
    }
    else{         
        switch (categoria) {
            case "A":
                aumentoEmpleado = AUMENTOS.A * salario;   
                break;
            case "B":
                aumentoEmpleado = AUMENTOS.B * salario;
                break;
            case "C":
                aumentoEmpleado = AUMENTOS.C * salario;
                break;
            case "D":
                aumentoEmpleado = AUMENTOS.D * salario;
                break;
            default:           
                aumentoEmpleado = 0.0;
                break;
        }

        salarioFinal = aumentoEmpleado + salario; 
        
        return `El empleado: ${nombre} con categoria "${categoria}" tiene un aumento de: $${aumentoEmpleado} con un salario final de: $${salarioFinal.toFixed(2)}`
    }
}

// valores de prueba

let empleado1 = "Diego Rodríguez";
let salario1 = 365.00;
let categoria1 = "e";


console.log(calcularAumento(empleado1,categoria1,salario1));
