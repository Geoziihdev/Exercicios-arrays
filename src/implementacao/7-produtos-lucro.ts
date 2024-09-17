/* # Produtos e lucros
Faça um algoritmo que leia o nome, o custo e o preço de venda de 50 produtos.
 Ao final deverá informar a quantidade de produtos que:
a. Tem lucro menor que 10%;
b. Tem lucro entre 10% e 30%;
c. Tem lucro maior que 30%.
*/

// Função para adicionar um produto aos arrays
function adicionarProduto(nomes: string[], custos: number[], precos: number[], nome: string, custo: number, preco: number): void {
    nomes.push(nome);
    custos.push(custo);
    precos.push(preco);

    console.log(`Produto adicionado: ${nome}`);
}

// Função para calcular e exibir lucros
function calcularLucros(nomes: string[], custos: number[], precos: number[]): void {
    for (let i = 0; i < nomes.length; i++) {
        const nome = nomes[i];
        const custo = custos[i];
        const precoVenda = precos[i];
        const lucroPercentual = ((precoVenda - custo) / custo) * 100;

        console.log(`Produto: ${nome}`);
        console.log(`Custo: R$${custo.toFixed(2)}`);
        console.log(`Preço de venda: R$${precoVenda.toFixed(2)}`);
        console.log(`Lucro percentual: ${lucroPercentual.toFixed(2)}%`);
        console.log('---------------------------');
    }
}

// Dados predefinidos
const nomes: string[] = ["Produto A", "Produto B", "Produto C"];
const custos: number[] = [100, 200, 150];
const precos: number[] = [150, 250, 200];

// Adicionar produtos
adicionarProduto(nomes, custos, precos, "Produto D", 300, 400);

// Calcular e exibir lucros
calcularLucros(nomes, custos, precos);
