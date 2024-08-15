// usando metodos de los arreglos

let personas = [
    { nombre: 'Isaac', edad: 16 },
    { nombre: 'Cristian', edad: 18 },
    { nombre: 'Edgar', edad: 15 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
]

// metodo map() => se utiliza para recorrer un arreglo

personas.map(persona=> {
    // devolver las personas que sean mayor de edad
    if(persona.edad>=18){
        console.log(persona.nombre);        
    }
})

// deolver nuevo arreglo con las personas mayores de edad
// filter() => filtra y devuelve un arreglo en base a una condicion

let mayoresEdad = personas.filter(persona => persona.edad >= 18)
console.log(mayoresEdad)

// find() => 

personas.find(persona => persona.edad >= 18);

// push() agrega en la ultima posicion

personas.push({nombre: 'Mateo', edad: 19});
console.log(personas);

// unshift() agrega en la primera posicion

personas.unshift({nombre: 'Marcela', edad: 21});
console.log(personas);

// eliminar el ultimo elemento del arreglo
personas.pop();
console.log(personas);

// eliminar el primer elemento del arreglo
personas.shift(personas);
console.log(personas);
