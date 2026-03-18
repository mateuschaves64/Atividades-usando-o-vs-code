function calcularOrcamentoBruto(horasTrabalhadas, valorPorHora){
    let valorbruto = horasTrabalhadas * valorPorHora
    return valorbruto
}// calculo do valor bruto.

//Calculo do valor líquido.
function aplicarImposto(valorbruto){
    let valorliquido = valorbruto * 0.85 
    return valorliquido
}

//Constantes que definem os valores das horas do projeto e custo por hora.
const horasProjeto = 80
const custoPorHora = 35.00
let custoinicial = calcularOrcamentoBruto(horasProjeto, custoPorHora ) // Variável comunicadora com o valor bruto.
let custofinal = aplicarImposto(custoinicial) //Variável comunicadora com a função do valor líquido.
console.log(custoinicial)
console.log(custofinal) //Console.log que printa as variáveis.