/* # Loja de artesanato vendas
Uma pequena loja de artesanato possui apenas um vendedor e comercializa dez tipos de objetos.
O vendedor recebe um salário de R$400,00 acrescido de 5 % do valor total de suas vendas.
O valor unitário dos objetos deve ser informado e armazenado em um vetor; 
a quantidade vendida de cada peça deve ficar em outro, mas na mesma posição, 
e o código do produto deve ficar em um terceiro vetor, sempre respeitando as posições.
Crie um programa que receba o código, o preço e quantidade vendida, armazenando 
- os em seus respectivos vetores, determine e mostre:
a.Um relatório contendo o código, a quantidade, o valor unitário, 
e o valor total vendido para cada objeto.Ao final deverá ser mostrado o valor geral das vendas 
e o valor da comissão que será paga ao vendedor.
b.O código e o valor do objeto mais vendido(não se preocupe com empates).
*/

function gerarRelatorioVendas(codigos: number[], precos: number[], quantidades: number[]): void {
    let valorTotalVendas = 0;
    let maxQuantidade = 0;
    let codigoMaisVendido = 0;
    let precoMaisVendido = 0;
    
    console.log("Relatório de Vendas:");
    console.log("Código | Quantidade | Valor Unitário | Valor Total");
    
    for (let i = 0; i < codigos.length; i++) {
        const codigo = codigos[i];
        const preco = precos[i];
        const quantidade = quantidades[i];
        const valorTotal = preco * quantidade;
        
        valorTotalVendas += valorTotal;
        
        // Verifica o produto mais vendido
        if (quantidade > maxQuantidade) {
            maxQuantidade = quantidade;
            codigoMaisVendido = codigo;
            precoMaisVendido = preco;
        }
        
        console.log(`${codigo}     | ${quantidade}       | R$${preco.toFixed(2)}     | R$${valorTotal.toFixed(2)}`);
    }
    
    const comissao = valorTotalVendas * 0.05;
    
    console.log("\nValor Geral das Vendas: R$" + valorTotalVendas.toFixed(2));
    console.log("Comissão do Vendedor: R$" + comissao.toFixed(2));
    console.log("Código do Produto Mais Vendido: " + codigoMaisVendido);
    console.log("Valor Unitário do Produto Mais Vendido: R$" + precoMaisVendido.toFixed(2));
}

// Exemplo de uso
const codigos = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
const precos = [20.5, 35.0, 15.75, 40.0, 25.0, 50.0, 12.0, 22.5, 30.0, 45.0];
const quantidades = [10, 5, 15, 8, 20, 12, 25, 6, 18, 7];

// Chama a função para gerar o relatório de vendas
gerarRelatorioVendas(codigos, precos, quantidades);
