/* # Vetor pares dobro e impares triplo
Crie um algoritmo que leia um vetor de 30 números inteiros 
e gere um segundo vetor cujas posições pares são o dobro do vetor original 
e as ímpares o triplo. */

function gerarVetorParesDobroImparesTriplo(vetorOriginal: number[]): number[] {
    const vetorModificado: number[] = [];

    for (let i = 0; i < vetorOriginal.length; i++) {
        if (i % 2 === 0) { // Índice par
            vetorModificado[i] = vetorOriginal[i] * 2;
        } else { // Índice ímpar
            vetorModificado[i] = vetorOriginal[i] * 3;
        }
    }

    return vetorModificado;
}

// Função para gerar um vetor de 30 números inteiros para teste
function gerarVetorOriginal(size: number): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < size; i++) {
        vetor.push(i + 1); // Números de 1 a 30
    }
    return vetor;
}

// Testando a função
const vetorOriginal: number[] = gerarVetorOriginal(30);
const vetorTransformado: number[] = gerarVetorParesDobroImparesTriplo(vetorOriginal);
console.log("Vetor Original:", vetorOriginal);
console.log("Vetor Transformado:", vetorTransformado);
