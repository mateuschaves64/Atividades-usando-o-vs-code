const senhaSecreta = ["a", "C", "5", "!", "z"] //array inicial
let senhaCorreta = false // variável que será mudada com o analisador


//Este If funcionará como um analisador que conversa diretamente com a constante "senhaSecreta" checando se ela atende os requisitos
if(senhaSecreta[0] == ["a"] && senhaSecreta[1] == ["C"] && senhaSecreta[2] == ["5"] && senhaSecreta[3] == ["!"] && senhaSecreta[4] == ["z"]){
        senhaCorreta = true
} else {
    senhaCorreta = false //permanece falsa quando há um erro na senha analisada
}


//estrutura condicional que dará o print com a senha sendo válida ou inválida
if(senhaCorreta === true){
    console.log("Senha válida")
} else {
    console.log("Senha Inválida")
}