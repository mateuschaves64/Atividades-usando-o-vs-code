const limitealerta = 50;
const totalDiasAnalise = 7;
const mesAnalise = 6;
let diascontados = 1;
let consumoAcumulado = 0;
let consumoDoDia = 0;

while (diascontados <= totalDiasAnalise){
    let consumoDoDia = 40 + diascontados*2
        consumoAcumulado += consumoDoDia 
            diascontados++
}
let mediaConsumoSemanal = consumoAcumulado / totalDiasAnalise

console.log("Media do consumo Semanal: " + mediaConsumoSemanal);

if(mediaConsumoSemanal < 40){
    console.log("Classificação: Excelente. Consumo muito baixo.")
}else if(mediaConsumoSemanal<=limitealerta){
    console.log("Classificação: Satisfatória. Consumo dentro do limite.")
}else{
    console.log("Classificação: Atenção. Consumo acima do limite de alerta.")
}

switch(mesAnalise){
    case 1:  console.log("Janeiro: Início de ano.")
    break;
case 3:  console.log("Março: Relatório de Primeiro Trimestre.")
break;
case 6:  console.log("Junho: Relatório Semestral.")
break;
case 12: console.log("Dezembro: Fechamento Anual.")
break;
}