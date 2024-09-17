/* # Pontuação do concurso
Crie um algoritmo que leia a pontuação final de 200 provas de um concurso
e os nomes dos respectivos participantes, e apresente uma lista dos colocados
que obtiveram mais de 70 pontos.
*/

// Define a interface para o participante
interface Participante {
nome: string;
pontuacao: number;
}
// Função para listar os participantes com mais de 70 pontos
function listarAprovados(participantes: Participante[]): string[] {

// Lista para armazenar os nomes dos aprovados
const participantesAprovados: string[] = [];

// Verifica cada participante
for (const participante of participantes) {
if (participante.pontuacao > 70) {
participantesAprovados.push(participante.nome);
}
}   
// Exibe os resultados
console.log("Participantes com mais de 70 pontos:");
participantesAprovados.forEach(nome => console.log(nome));
    
return participantesAprovados;
}

// Exemplo de uso
const participantes: Participante[] = [
    { nome: "Ana", pontuacao: 60 },
    { nome: "Pedro", pontuacao: 75 },
    { nome: "João", pontuacao: 82 },
    { nome: "Maria", pontuacao: 45 },
    { nome: "Carlos", pontuacao: 88 },
    { nome: "Fernanda", pontuacao: 70 },
    { nome: "José", pontuacao: 90 },
    { nome: "Patrícia", pontuacao: 55 },
    { nome: "Lucas", pontuacao: 67 },
    { nome: "Amanda", pontuacao: 74 },
    { nome: "Ricardo", pontuacao: 85 },
    { nome: "Sofia", pontuacao: 78 },
    { nome: "Gabriel", pontuacao: 91 },
    { nome: "Larissa", pontuacao: 66 },
    { nome: "Roberto", pontuacao: 72 },
    { nome: "Juliana", pontuacao: 80 },
    { nome: "Marcos", pontuacao: 95 },
    { nome: "Renata", pontuacao: 62 },
    { nome: "Tiago", pontuacao: 77 },
    { nome: "Eliane", pontuacao: 81 }
];

// Chama a função para listar os aprovados
listarAprovados(participantes);
