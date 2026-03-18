const valorTotalDaCompra = 200
const cupomDeDesconto =  59.1
let clientefidelidade = true
//Código para a interface
console.log("--Checkout de alguma loja importante e influente ae--\n")
if(clientefidelidade == true){
    console.log("O cliente possui fidelidade\n");
}else{
    console.log("O cliente não possui fidelidade")
}

// Condições necessárias para prosseguir com a compra

if(valorTotalDaCompra == 200 || valorTotalDaCompra >= 200 && clientefidelidade == true){
    console.log("Você terá 20% de desconto.\n")
}else{
    console.log("Você terá apenas 10% de desconto.")
}
if(valorTotalDaCompra == 200 && valorTotalDaCompra >= 200){
    console.log("Está com sorte hoje.\n")
}else{
    console.log("Na próxima você terá mais sorte.")
}