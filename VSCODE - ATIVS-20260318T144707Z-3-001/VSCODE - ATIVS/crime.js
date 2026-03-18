const suspeito_A = { idadeSuspeito: 40, corCabelo: 'preto', usaOculos: false,  jaEstevePreso: true, altura: 175};
const suspeito_B = {idadeSuspeito: 28, corCabelo: 'castanho', usaOculos: true, jaEstevePreso: true, altura: 185};
const suspeito_C = {idadeSuspeito: 36, corCabelo: 'ruivo', usaOculos: false, jaEstevePreso: false, altura: 190};

console.log("--Caso Criminal--\n");
console.log("Objetivo:  investigar um crime. O criminoso deixou para trás uma série de pistas,\n mas elas são codificadas em lógica de programação. Para capturá-lo,\n você deve traduzir as pistas em condições lógicas e determinar o perfil do culpado.\n");

const analisadorfinalA = (suspeito_A.idadeSuspeito >= 25 && suspeito_A.idadeSuspeito <=35) && 
                        (suspeito_A.corCabelo !== 'loiro' && suspeito_A.jaEstevePreso === true) && 
                        (suspeito_A.altura > 180 || suspeito_A.usaOculos === false);

const analisadorfinalB = (suspeito_B.idadeSuspeito >= 25 && suspeito_B.idadeSuspeito <=35) && 
                        (suspeito_B.corCabelo !== 'loiro' && suspeito_B.jaEstevePreso === true) && 
                        (suspeito_B.altura > 180 || suspeito_B.usaOculos === false);

const analisadorfinalC = (suspeito_C.idadeSuspeito >= 25 && suspeito_C.idadeSuspeito <=35) && 
                        (suspeito_C.corCabelo !== 'loiro' && suspeito_C.jaEstevePreso === true) && 
                        (suspeito_C.altura > 180 || suspeito_C.usaOculos === false);

if(analisadorfinalA){
console.log("O suspeito A é o criminoso")
}else if(analisadorfinalB){
    console.log("O suspeito B é o criminoso")
}else if(analisadorfinalC){
    console.log("O suspeito C é o criminoso")
}

if(analisadorfinalA !== suspeito_A){
    console.log("Suspeito A eliminado da lista de suspeitos\n")
}







