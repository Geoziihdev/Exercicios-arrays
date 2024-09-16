/*# Vetor inverso
Crie um algoritmo que leia um vetor de 10 posições e depois apresente este vetor em ordem inversa na tela.*/

function apresentarVetorInverso(vetores: number[]): number[] {
    
    for (let i = 1; i <= 10; i++) {
        vetores.push(i);
    }

    let vetorInvertido: number[] = [];

    for (let i = vetores.length - 1; i >= 0; i--) {
        vetorInvertido.push(vetores[i]);
    }

    return vetorInvertido;
}

//teste
const resultado = apresentarVetorInverso([]);
console.log(resultado); // Exibe o vetor invertido



