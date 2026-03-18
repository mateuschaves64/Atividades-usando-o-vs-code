const nomeRestaurante = 'suínos happy land';
const avaliacaoUsuario = 8
const diadasemana = 3
//Design de interface do sistema de avaliação dos clientes
console.log("--Sistema de avaliação dos clientes--\n")
console.log("Nome do Restaurante: "+ nomeRestaurante)
if(avaliacaoUsuario >= 8){
    console.log("Bom restaurante!")
}else{
    console.log("Ops, nenhuma avaliação encontrada ou realizada ainda")
}

if(avaliacaoUsuario <= 4){
    console.log("As avaliações no geral estão ruins")
}else{
    console.log("Nenhuma avaliação ruim ainda por cima!")
}
//Sistema de promoções do estabelecimento usando string
console.log("--Promoções da semana--\n");

switch (diadasemana){
    case 0:
        console.log("Procurando algo aqui? bem, melhor achar melhor!")
        break;
        case 1:
            console.log("Segunda-Feira", "Promoção Picanha: R$ 37,00 com redução de 10% no preço original")
            break;
            case 2:
                console.log("Terça-Feira", "Nenhuma promoção aqui, camarada!")
                break;
                case 3:
                    console.log("Quarta-Feira", "Promoção refrigerante: Ao comprar dois copos leve um terceiro gratuitamente! (e compre uma água também, o seu rim vai agradecer depois)")
                    break;
                    case 4: 
                    console.log("Quinta-Feira", "Sem promoção!");
                    break;
                    case 5:
                        console.log("Sexta-Feira", "Sem promoção!!!!!!!!!");
                        break;
                        case 6:
                            console.log("Sábado", "Promoção: Pizza tamanho família (R$ 66,11) com redução de 12% do preço original");
                            break;
                            case 7:
                                console.log("Domingo", "Sem promoção!!!")
                                break

}