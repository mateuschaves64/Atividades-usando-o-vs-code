const nome = "Richarlisson";
let nota1 = null
let nota2 = null
let nota3 = null
const mediaMinima = 6
const frequenciamin = 25
let frequencia = 20
let media = (nota1+ nota2+ nota3)/3
let aprovado = media >= mediaMinima && frequencia >= frequenciamin
let recuperação = media < mediaMinima && frequencia >= frequenciamin
let reprovado = !aprovado
//Variáveis necessárias para funcionamento da média



//Código para tela de título
console.log("--Media do Aluno--\n")
console.log("Nome: "+ nome)
console.log("Média alcançada: "+ media)

//Calculo e print da situação academica do aluno
if(media == mediaMinima){
    console.log("O aluno passou")
 }else if(media =! mediaMinima){
    console.log("O aluno reprovou")
 }else{
    console.log("O aluno está de recuperação")
}