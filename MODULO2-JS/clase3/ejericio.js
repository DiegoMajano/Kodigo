// Ejercicio
/*


En base al siguiente arreglo de notas [7,8,6.5,5,4,9,8.2]
 - Obtener cuantos alumnos aprobaron (para aprobar la nota debe ser mayor o igual a 7)
 - Obtener cuantos alumnos estan en recuperacion (deben tener una nota entre 5 y 6.9)
 - Obtener cuantos alumnos reprobaron
 
 */



 let notas = [7,8,6.5,5,4,9,8.2];
 let aprobados = 0;
 let reprobados = 0;
 let recuperacion = 0;
 
 for (let i = 0; i < notas.length; i++) {
     if(notas[i] >= 7){
             aprobados++
     } else if(notas[i] >=5 && notas[i] < 7){
         recuperacion++;
     } else{
         reprobados++;
     }
 }
 
 console.log(`Aprobados son: ${aprobados} \nRecuperados son: ${recuperacion} \nReprobados son: ${reprobados}`)
 
 
 