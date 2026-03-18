const nomeAluno = 'Jacinto Segundo';
const nomeDisciplina = 'Matemática';
const mediaParaAprovação = 7;
const intermediário = 1
let categoriaFaltas = '' //esta variável será preenchida com if else posteriormente.
let notaProva1 = 1;
let notaTrabalho = 5;
let notaFinal = 6; //
let faltasPercentual = 0.18;
let mediaFinal = (notaProva1 + notaTrabalho + notaFinal) / 3 // Calculo da media.

//variáveis para o sistema, incluindo para o switch.

const aprovadopornota = (mediaFinal => mediaParaAprovação); //Analisador de aprovação.
const reprovadoPorFaltas = ( faltasPercentual => 0.25 ); //Analisador de faltas.

//transmissão da "HUD" no console:

console.log("--Sistema de notas--\n");
console.log("Nome do Aluno: "+nomeAluno);
console.log("Disciplina: "+nomeDisciplina);
console.log("media para Aprovação: "+mediaParaAprovação);
console.log("--Notas da Prova--\n");
console.log("Nota prova 1: "+notaProva1)
console.log("Nota por atividade extra: "+notaTrabalho);
console.log("Nota final: "+notaFinal);
console.log("media final: "+mediaFinal.toFixed(2));

//Estrutura de IF else para transmitir média e talvez condição acadêmica.

if(reprovadoPorFaltas == true){
    console.log("O aluno reprovou por falta")
}else if(aprovadopornota == true && mediaFinal >= 9.5){
console.log("Aprovado com Distinção")
}else if(aprovadopornota === true || mediaFinal >= mediaParaAprovação){
console.log("Aprovado")
}else if(mediaFinal >= 6.8  || mediaFinal >= 6.9){
    console.log("Necessário fazer uma prova extra")
}else{
    console.log("Reprovado")
}
if(categoriaFaltas > 18){
    console.log("Valor de falta: "+intermediário)
}else if(categoriaFaltas<=16){
    console.log("Valor de falta: "+intermediário)
}
if(categoriaFaltas > 18){
    console.log("Valor de falta: "+intermediário)
}
//O switch analisará a quantidade de faltas para o if else anterior dar seu veredito.

switch(intermediário){
    case 0:
        console.log("Nenhuma falta registrada");
        break;
case 1: 
console.log("Baixo índice de faltas");
break;
    case 2:
        console.log("Índice de Faltas médio");
        break;
            case 3:
                console.log("Alto Índice de faltas");
                break;
};