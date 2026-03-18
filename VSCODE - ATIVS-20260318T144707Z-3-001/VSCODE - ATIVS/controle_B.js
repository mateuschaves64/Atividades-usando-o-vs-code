const capacidadeMaxima = 50
const limiteCritico = 10
let estoqueAtual = 35
let vendasPendentes = 28
//Saudações do programa
console.log("--Bem Vindo ao gerenciador de estoque--\n")
console.log("O estoque atual contém: "+estoqueAtual)
console.log("Vendas Pendentes: "+vendasPendentes)
//Este if esta ditando as condições de caso o estoque esteja dentro do limite de suporte
if(estoqueAtual <= limiteCritico){
    console.log("ALERTA MÁXIMO: Estoque em nível crítico! Necessário comprar mais.")
}else if(estoqueAtual < capacidadeMaxima){
    let vagasrestantes = (capacidadeMaxima - estoqueAtual);
    console.log("Estoque OK, mas fique atento. Restam "+vagasrestantes+" vagas.")
}else{
    console.log("Estoque Lotado!")
}
//Irá esvaziar o estoque enquanto as vendas pendentes forem menores e o estoque atual não estiver vazio
while (vendasPendentes > 0 && estoqueAtual > 0){
    vendasPendentes -- && estoqueAtual --
    console.log("Venda processada. Restam "+vendasPendentes+ " pedidos e "+estoqueAtual+ " Itens em estoque\n")
}
if(vendasPendentes > 0){
    console.log("Estoque esgotado! "+vendasPendentes+" vendas ficaram pendentes.")
}else{
    console.log("Todas as vendas foram processadas com sucesso!")
}
//O if está finalizando a ação de repetir o while enquanto o estoque atual for menor que o limite crítico