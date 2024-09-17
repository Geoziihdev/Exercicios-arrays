/*
Desenvolva um algoritmo que permita a leitura de um vetor de 30 números inteiros,
e gere um segundo vetor com os mesmos dados, mas de maneira invertida, ou seja, 
o primeiro elemento ficará na última posição, o segundo na penúltima, e assim por diante.

*/

function inverterVetor(vetor1: number[]): number[] {
    const vetor2: number[] = [];  // Defina o vetor2 aqui
    const comprimento = vetor1.length;

    for (let i = 0; i < comprimento; i++) {
        vetor2[i] = vetor1[comprimento - 1 - i];  // Preenche vetor2 com os elementos de vetor1 em ordem invertida
    }

    return vetor2;  // Retorna o vetor invertido
}  

// Exemplo de uso
const vetor1: number[] = [];
// Preenche vetor1 com 30 números inteiros
for (let i = 0; i < 30; i++) {
    vetor1.push(i + 1);
}

const vetorInvertido = inverterVetor(vetor1);
console.log("Vetor Original:", vetor1);
console.log("Vetor Invertido:", vetorInvertido);




/* Método Polliana */

/*

function inverterVetor():number [] {

    const vetor1: number[] = []; 
    const vetor2: number[] = []; 

    for (let i = 0; i < 30; i++) { 
        vetor1.push(i + 1); 
      
    }

    for (let i = 29; i >= 0; i--) {
        vetor2.push(vetor1[i]);
    }

    return vetor2;
}

//teste
console.log("Vetor invertido:",inverterVetor());


    */





