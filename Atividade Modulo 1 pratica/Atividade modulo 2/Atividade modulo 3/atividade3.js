class personagem{
    constructor(nome, classe, vida){
    this.nome = nome;
    this.classe = classe;
    this.vida = 100;
}
receberDano(quantidade){
    this.vida -= quantidade;
}
}

const jogador1 = new personagem('Aragorn', 'Guerreiro', 100);
console.log(jogador1);