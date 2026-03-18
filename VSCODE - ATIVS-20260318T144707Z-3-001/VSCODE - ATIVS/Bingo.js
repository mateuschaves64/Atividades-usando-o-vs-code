const limiteMaximo = 50 //Constante que define o limite que o contador pode alcançar

for(let i = 1; i <= limiteMaximo; i++){ //calculo9 que iniciará o laço e sua lógica
    if(i % 2 !==0){

        console.log(i+" é um numero impar.")

    } else {
        //Mensagem transmitida com o senão, onde o sistema indicará se caso o numero não segue a mesma logica do if, ele será um numero par
        console.log(i+" é um numero par.")

    }
}