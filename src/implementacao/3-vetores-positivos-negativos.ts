/*# Vetores positivos negativos
Faça um programa que preencha um vetor com oito números inteiros, calcule e mostre dois vetores resultantes. 
O primeiro deve conter os números positivos; o segundo deve conter os números negativos. 
Cada vetor resultante vai ter, no máximo, oito posições, que poderão não ser completamente utilizadas.*/

function separarPositivosNegativos(vetores: number[]): { positivos: number[], negativos: number[] } {

    const positivos: number[] = [];
    const negativos: number[] = [];

    if (vetores.length !== 8) {
        for (let i = 1; i <= 8; i++) {
            vetores.push(i - 5); // O vetor está sendo preenchido automaticamente com números de -4 a 3
        }
    }

    // Separa os números em positivos e negativos
    for (let i = 0; i < vetores.length; i++) {
        if (vetores[i] >= 0) {
            positivos.push(vetores[i]);
        } else {
            negativos.push(vetores[i]);
        }
    }

    return {
        positivos: positivos,
        negativos: negativos
    };
}

// Teste
console.log(separarPositivosNegativos([]));