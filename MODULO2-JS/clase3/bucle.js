// estructuras repetitivas: for, while, do while

function UsosFor(){
    let valor = 100;
    
    for (let i = 0; i < valor; i++) {
        console.log(i);    
    }
    
    let cadena = "Estamos en las estructuras de control";
    
    for (let i = 0; i < cadena.length; i++) {
        console.log(cadena[i]);
        
    }
}

function fibonacci(cant){
    let fib = [0,1];
    let next =0;
    
    for(let i = 2; i < cant; i++){
        next = fib[i-2] + fib[i-1];
        fib.push(next)
    }
    return fib;
}

// console.log(fibonacci(10))

