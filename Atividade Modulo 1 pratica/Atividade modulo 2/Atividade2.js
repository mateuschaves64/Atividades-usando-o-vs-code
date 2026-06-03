const merchs = ['scout','soldier','Pyro','demoman','Heavy','Engineer','Sniper','Medic','Spy'];

const personagem = {
    nome: 'Engineer',
    posicao: 'defesa',
    arma: () => 'golden wrench'
};

const meutime = [0];

meutime.unshift(personagem);

console.log({
    nome: meutime[0].nome,
    posicao: meutime[0].posicao,
    arma: meutime[0].arma()
});