/*
# Intercalacao de vetores
Faça um programa que preencha dois vetores de dez elementos numéricos 
cada um e mostre o vetor resultante da intercalação deles.
*/


function intercalacaoDeVetores(vetor1: number[], vetor2: number[]): number[] {
    const vetorIntercalado: number[] = [];
    const comprimento = vetor1.length; // Assume que vetor1 e vetor2 têm o mesmo comprimento

    for (let i = 0; i < comprimento; i++) {
        vetorIntercalado.push(vetor1[i]);
        vetorIntercalado.push(vetor2[i]);
    }

    return vetorIntercalado;
}

// Gerar um vetor com números aleatórios
function gerarVetor(tamanho: number): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * 100) + 1); // Números aleatórios entre 1 e 100
    }
    return vetor;
}

// Definir o tamanho dos vetores
const tamanhoVetor = 10;

// Gerar vetores com valores aleatórios
const vetor1 = gerarVetor(tamanhoVetor);
const vetor2 = gerarVetor(tamanhoVetor);

// Intercalar os vetores e exibir o resultado
const vetorIntercalado = intercalacaoDeVetores(vetor1, vetor2);
console.log('Vetor 1:', vetor1);
console.log('Vetor 2:', vetor2);
console.log('Vetor intercalado:', vetorIntercalado);









/*Outra forma de fazer*/

/* import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function intercalacaoDeVetores(vetor1: number[], vetor2: number[]): number[] {
    const vetorIntercalado: number[] = [];

    // O comprimento dos vetores deve ser igual
    if (vetor1.length !== vetor2.length) {
        throw new Error('Os vetores devem ter o mesmo comprimento.');
    }

    // Intercalando elementos dos vetores
    for (let i = 0; i < vetor1.length; i++) {
        vetorIntercalado.push(vetor1[i]);
        vetorIntercalado.push(vetor2[i]);
    }

    return vetorIntercalado;
}

// Função para ler um vetor do usuário
function lerVetor(nome: string, callback: (vetor: number[]) => void): void {
    const vetor: number[] = [];
    let contador = 0;

    function lerValor(): void {
        if (contador < 10) {
            rl.question(`Digite o ${contador + 1}º valor para o ${nome}: `, (entrada) => {
                const valor = parseFloat(entrada);
                if (!isNaN(valor)) {
                    vetor.push(valor);
                    contador++;
                    lerValor();
                } else {
                    console.log('Valor inválido. Tente novamente.');
                    lerValor();
                }
            });
        } else {
            callback(vetor);
        }
    }

    lerValor();
}

// Leitura dos vetores
let vetor1: number[], vetor2: number[];

function iniciar(): void {
    lerVetor('primeiro vetor', (vetor1Result) => {
        vetor1 = vetor1Result;
        lerVetor('segundo vetor', (vetor2Result) => {
            vetor2 = vetor2Result;
            rl.close(); // Fechar a interface readline
            // Intercalando vetores e exibindo resultado
            const vetorIntercalado = intercalacaoDeVetores(vetor1, vetor2);
            console.log('Vetor intercalado:', vetorIntercalado);
        });
    });
}

iniciar();

*/









/* Outra forma de fazer*/

/* function intercalacaoDeVetores(vetor1: number[], vetor2: number[]): number[] {
    const vetorIntercalado: number[] = [];

    // O comprimento dos vetores deve ser igual
    if (vetor1.length !== vetor2.length) {
        throw new Error('Os vetores devem ter o mesmo comprimento.');
    }

    // Intercalando elementos dos vetores
    for (let i = 0; i < vetor1.length; i++) {
        vetorIntercalado.push(vetor1[i]);
        vetorIntercalado.push(vetor2[i]);
    }

    return vetorIntercalado;
}

// Vetores preenchidos com valores fixos
const vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vetor2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Intercalando vetores e exibindo resultado
const vetorIntercalado = intercalacaoDeVetores(vetor1, vetor2);
console.log('Vetor intercalado:', vetorIntercalado);

*/







/* Método Poliana */


/* function intercalacaoVetores():number [] {

    const vetor1: number[] = []; 
    const vetor2: number[] = []; 
    const vetorIntercalado: number[] = []; 

    for (let i = 0; i < 10; i++) { // o loop terá 10 interações. 
        vetor1.push(i + 1); // de 1 a 10 no vetor1
        vetor2.push(i + 11); // de 11 a 20 no vetor2
    
    }
    
        // Intercalando os vetores
        for (let i = 0; i < 10; i++) { 
            vetorIntercalado.push(vetor1[i]); // Adiciona o valor de vetor1
            vetorIntercalado.push(vetor2[i]); // Adiciona o valor de vetor2
        }
        
        return vetorIntercalado;
    }  
    
    // Teste
console.log("Vetor Intercalado:", intercalacaoVetores());


*/
