const investimentoInicial = 1000.00
const taxaJuros = 0.05 //valor a ser levado em consideração no calculo
let saldoAtual = 1000

//Ano em contagem crescente até dez anos realizando o calculo de juros vezes o saldo atual
for (let ano = 1; ano <= 10; ano ++){
    saldoAtual = (1 + taxaJuros) * saldoAtual + saldoAtual
    console.log("Após o ano "+ ano+" o saldo é: "+saldoAtual.toFixed(2))
};