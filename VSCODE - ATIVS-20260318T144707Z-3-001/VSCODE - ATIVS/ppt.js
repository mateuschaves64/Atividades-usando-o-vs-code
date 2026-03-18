alert("Bem Vindo ao PPt (Pedra, Papel, Tesoura)");
alert("Regras: Você e seu colega irão digitar suas escolhas (pedra, papel ou tesoura, em caixa baixa).Em seguida será exibido o resultado da vitoria de um dos membros.")
let player1 = prompt("Sua Jogada Player 1!")
let player2 = prompt("Sua jogada Player 2!")

if(player1 == 'pedra' && player2 == 'tesoura'){
    alert("Pedra Vence de Tesoura de lavada!")
}else if(player2 == 'pedra' && player1 == 'tesoura'){
    alert("Temos uma jogada interessante aqui, mas a pedra vence da tesoura!")
}else if(player1 == 'tesoura' && player2 == 'papel'){
    alert("Grande saque por parte do player 1, papel perde pra tesoura!") || alert("Olha só!, essa batalha só se torna mais interessante a cada minuto!")
}else if(player2 == 'tesoura' && player1 == 'papel'){
    alert("Olha só que coisa, o player 2 sacou tesoura contra o papel do player 1, haja coração pra aguentar tamanha emoção!")
}else if(player1 == 'pedra' && player2 == 'papel'){
    alert("Combo interessante!, a pedra perde para o papel!")
}else if(player2 == 'pedra' && player1 == 'papel'){
    alert("Parece que temos um embate interessante aqui!, papel do player 1 ganhou da pedra do player 2")
}else if(player1 == null && player2 == null){
    alert("Resultados desconsiderados!")
}else if(player1 == 'pedra' && player2 == 'pedra' || player1 == 'papel' && palyer2 == 'papel' || player1 == 'tesoura' && player2 == 'tesoura'){
    alert("Empate!")
};