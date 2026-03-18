const totalBimestres = 4
const mediaAprovacao = 7.0
let somaNotas = 0
let notaBimestral = 0
//Interface
console.log("-- Notas por Bimestre --")

for(let bimestre = 1; bimestre <= 4;bimestre++){ //Laço de repetição com limite do bimestre (Realiza as ações enquanto bimestre é menor que o total dele mesmo)
    let notaBimestral = 0

    if(bimestre === 1){

        notaBimestral = 8.5

    }else if(bimestre === 2){

        notaBimestral = 6.0

    }else if(bimestre === 3){

        notaBimestral = 7.5
        
    }else if(bimestre === 4){

       notaBimestral = 9.0

    }
    console.log(notaBimestral)

    somaNotas+=notaBimestral // Calculo que posterior que soma as notas por bimestre
}

mediafinal = somaNotas/totalBimestres //Calculo de Divisão que define a media final
//Saída no console após a ação do laço de repetição
console.log("Media final: "+mediafinal)

if(mediafinal < mediaAprovacao){
    console.log("Reprovado")
}

if(mediafinal >= mediaAprovacao){
    console.log("Aprovado")
}