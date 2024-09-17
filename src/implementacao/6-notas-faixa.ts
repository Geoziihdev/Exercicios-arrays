/* # Notas faixa
Elabore um algoritmo que leia uma série de 50 notas
e uma média necessária para aprovação, 
calcule e mostre quantas notas estão em um intervalo de valores que vai de 10%
abaixo da média até 10% acima dela.
*/

function contarNotasNaFaixa(notas: number[], mediaNecessaria: number): void {
    // Calcula os limites da faixa
    const limiteInferior = mediaNecessaria - (0.10 * mediaNecessaria);
    const limiteSuperior = mediaNecessaria + (0.10 * mediaNecessaria);

    // Contador de notas na faixa
    let contadorNotasNaFaixa = 0;

    // Verifica quantas notas estão na faixa
    for (const nota of notas) {
        if (nota >= limiteInferior && nota <= limiteSuperior) {
            contadorNotasNaFaixa++;
        }
    }

    // Exibe o resultado
    console.log(`Quantidade de notas dentro da faixa de ${limiteInferior.toFixed(2)} a ${limiteSuperior.toFixed(2)}: ${contadorNotasNaFaixa}`);
}

// Exemplo de uso
const minhasNotas: number[] = [];
const mediaParaAprovacao: number = 70;

// Preenche o vetor com 50 notas aleatórias entre 50 e 100
for (let i = 0; i < 50; i++) {
    minhasNotas.push(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
}

// Chama a função para executar o cálculo
contarNotasNaFaixa(minhasNotas, mediaParaAprovacao);

