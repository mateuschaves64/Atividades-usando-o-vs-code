const artefato_A = {tipoArtefato: 'ferramenta', estaIntacto: false, dataDescoberta: 1998, pesoKg: 65};
const artefato_B = {tipoArtefato: 'estatua', estaIntacto: true, dataDescoberta: 2010, pesoKg: 40};
const artefato_C = {tipoArtefato: 'mapa', estaIntacto: false, dataDescoberta: 2022, pesoKg: 30};
/*
Os artefatos A:C representam constantes com seus respectivos itens entre {}
As variáveis Arqueólogo A:C desempenham o papel de analisar os três artefatos os comparando com as pistas 1 e 2
*/
let Arqueólogo_A = (artefato_A.tipoArtefato !== 'joia' && artefato_A.dataDescoberta > 2000) &&

                   (artefato_A.estaIntacto === true || artefato_A.pesoKg > 50)

let Arqueólogo_B = (artefato_B.tipoArtefato !== 'joia' && artefato_B.dataDescoberta > 2000) && 
                   (artefato_B.estaIntacto === true || artefato_B.pesoKg > 50)

let Arqueólogo_C = (artefato_C.tipoArtefato !== 'joia' && artefato_C.dataDescoberta > 2000) && 
                   (artefato_C.estaIntacto === true || artefato_C.pesoKg > 50)

//Os console.log desempenham o funcionamento da interface e lógica da conlcusão que os Arqueólogos anteriormente concluíram
console.log("--Analisador de Artefato--\n");
console.log("Achar o artefato grandioso")

if(Arqueólogo_A){
    console.log("O grandioso artefato é o artefato A")
}else if(Arqueólogo_B){
    console.log("O grandioso artefato é o artefato B")
}else if(Arqueólogo_C){
    console.log("O grandioso artefato é o artefato C")
}