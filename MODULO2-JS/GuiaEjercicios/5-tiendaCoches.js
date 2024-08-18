/**
 * 
 *  Realizar una función para una tienda de coches en donde se deberá calcular: 
 * Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
 * coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
 * el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
 * aplicara en base a lo que selecciono el usuario 
 * 
 */

const COCHES_FORD = [
    { nombre: "FIESTA", precio: 280000, descuento: 0.05 },
    { nombre: "FOCUS", precio: 190000, descuento: 0.10 },
    { nombre: "ESCAPE", precio: 300000, descuento: 0.20 }
]


function calcularDescuento(coche){

    coche = coche.toUpperCase();
    
    let precioFinal = 0.0;
    
    let compra;

    switch (coche) {
        case "FIESTA":
            compra = COCHES_FORD.filter(coche => coche.nombre === "FIESTA")
            break;
        case "FOCUS":
            compra = COCHES_FORD.filter(coche => coche.nombre === "FOCUS")
            break;
        case "ESCAPE":
            compra = COCHES_FORD.filter(coche => coche.nombre === "ESCAPE")
            break;
    
        default:
            return precioFinal;            
            break;
    }

    modelo = compra[0].nombre;
    descuento = compra[0].descuento;

    if(compra.length == 1){
        precioFinal = compra[0].precio - (compra[0].precio * compra[0].descuento);
        return precioFinal;
    } else{
        return "Vehículo no encontrado";
    }

}

let modelo = "";
let descuento = 0.0;

let precioConDescuento = calcularDescuento("focus");

if(precioConDescuento> 0.0 ) console.log(`El vehiculo FORD ${modelo} tiene un descuento del ${descuento*100}% queda con un precio con descuento de: $${precioConDescuento}`);
else console.log("El vehiculo seleccionado no tiene descuento");


