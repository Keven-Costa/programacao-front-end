// script.js
let n = process.argv.slice(2); // pega o 3° argumento no terminal
n = parseInt(n) // Transforma a variável no tipo Inteiro
let anterior = 0
let sucessor = 1
let resultado = anterior + sucessor

if ( n == 0 || n == 1 ) {
    return console.log(n)
}

for ( let i = 1; i < n; i++ ){
    console.log(resultado)
    
    resultado = anterior + sucessor
    anterior = sucessor
    sucessor = resultado
    
}
