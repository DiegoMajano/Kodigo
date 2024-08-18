/*
 * 
 * Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: 
 * Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
 * descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
 * es Puerto el Triunfo el descuento será del 15%.
 * 
 */


function calcularViaje(origen, destino){
    
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();
    let descuentoViaje = 0.0;
    
    if(origen == "ciudad de palma"){
        switch (destino) {
            case "la costa del sol":
                descuentoViaje = 0.05;
                break;
            case "panchimalco":
                descuentoViaje = 0.10;
                break;
            case "puerto el triunfo":
                descuentoViaje = 0.15;
                break;        
            default:
                descuentoViaje = 0.0;
                break;
        }
    } else {
        return "No existe descuento para el origen ingresado";
    }
    return descuentoViaje * 100; // retorna el descuento en porcentaje (0.0%)
}

