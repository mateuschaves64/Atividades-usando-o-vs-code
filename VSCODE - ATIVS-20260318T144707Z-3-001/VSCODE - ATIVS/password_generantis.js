let Nome_usuario = "Teteu";
const nasci = 2008;
let senha = '87212';
let min = 8;
let temsimbolo = false
//Embaixo se encontra a logica que irá associar a variavel senha com a variavel temsimbolo por meio da logica booleana ===, ||
senha = temsimbolo === true || min >= 8
//Esta variável abaixo relaciona "Senha Forte" com a variável "senha".
let senhaforte = senha;
//Transmissão do console :D
console.log("-- Gerador de senha --\n");
console.log("Vamos checar se sua senha é forte: " + senhaforte);

if(senhaforte){
    console.log("A senha é forte")
}else{
    console.log("A senha é fraca, tente ter mais critividade na proxima vez ae")
}

//Fim do codigo! ( /^-^)/