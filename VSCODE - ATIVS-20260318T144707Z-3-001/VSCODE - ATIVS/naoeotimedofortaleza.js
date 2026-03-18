const chaveA = {corChave: 'verde', possuiSimbolo: true, brilhoIntensidade: 65, material: 'bronze', idadeAnos: 300};
const chaveB = {corChave: 'azul', possuiSimbolo: false, brilhoIntensidade: 90, material: 'prata', idadeAnos: 700};
const chaveC = {corChave: 'prata', possuiSimbolo: false, brilhoIntensidade: 75, material: 'ouro', idadeAnos: 600};
const chaveD = {corChave: 'ouro', possuiSimbolo: true, brilhoIntensidade: 85, material: 'ouro', idadeAnos: 550};
const chaveE = {corChave: 'verde', possuiSimbolo: true, brilhoIntensidade: 95, material: 'diamante', idadeAnos: 450};

let analisadorA = (chaveA.corChave !== 'vermelho' && chaveA.material !== 'ferro')&& 
                  (chaveA.brilhoIntensidade > 80 || chaveA.possuiSimbolo === true) &&
                  (chaveA.idadeAnos > 500 && chaveA.material === 'ouro');

let analisadorB = (chaveB.corChave !== 'vermelho' && chaveB.material !== 'ferro')&& 
                  (chaveB.brilhoIntensidade > 80 || chaveB.possuiSimbolo === true)&&
                  (chaveB.idadeAnos > 500 && chaveB.material === 'ouro');

let analisadorC = (chaveC.corChave !== 'vermelho' && chaveC.material !== 'ferro')&& 
                  (chaveC.brilhoIntensidade > 80 || chaveC.possuiSimbolo === true) &&
                  (chaveC.idadeAnos > 500 && chaveC.material === 'ouro');

let analisadorD = (chaveD.corChave !== 'vermelho' && chaveD.material !== 'ferro')&& 
                  (chaveD.brilhoIntensidade > 80 || chaveD.possuiSimbolo === true) &&
                  (chaveD.idadeAnos > 500 && chaveD.material === 'ouro');

let analisadorE = (chaveE.corChave !== 'vermelho' && chaveE.material !== 'ferro')&& 
                  (chaveE.brilhoIntensidade > 80 || chaveE.possuiSimbolo === true) &&
                  (chaveE.idadeAnos > 500 && chaveE.material === 'ouro');

console.log("--Analisador.FORTALEZA.tesouro--\n");

if(analisadorA){
    console.log("Chave A")
}else if(analisadorB){
    console.log("Chave B")
}else if(analisadorC){
    console.log("Chave C")
}else if(analisadorD){
    console.log("Chave D")
}else if(analisadorE){
    console.log("Chave E")
}