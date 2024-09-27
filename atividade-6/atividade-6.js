let input = process.argv[2]; // pega o 3° argumento no terminal
let verificar = process.argv[3]; // pega o 2° arumento no terminal
let contagemLetras = 0;

let letras = []

// Adiciona todas a letras separadas no array: "letras"
for( let i = 0; i < input.length; i++){
    letras.push(input[i])
}

// Verifica cada letra e compara com a variável "verificar"
letras.forEach((l) => {
    if (l == verificar){
        contagemLetras++
    }
});

console.log(`A palavra ${input} tem: ${contagemLetras} letras \"${verificar}\"`)
