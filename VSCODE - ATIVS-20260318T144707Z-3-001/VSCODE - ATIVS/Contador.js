const votos = ["A", "B", "A", "C", "B", "A"]; //O array é uma base para o laço de repetição entender o sitema de votação
let votosA = 0; //Inicialmente não há votos 

for (let i = 0; i < 6; i++){ //O laço fará a adição de contagem enquanto a variavel i não é igual ou maior que 6
   if(votos[0] === "A"){
        votosA++
   }; //Este if fará a associação a contagem de intens dentro do array os associando com as strings
   
   console.log("Candidato A, Você recebeu "+votosA+" votos.")//Este print sinaliza quantos votos o candidato recebeu
};

//O if else abaixo fará o veredito de acordo com a condição de repetição

if (votosA > 3){
    console.log("Meus parabéns candidato A, você venceu a votação!")
} else {
    console.log("Infelizmente o candidato A perdeu a votação")
}

