const readline = require("readline");

const r1 = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});
const media = 10
let dados = {};
console.log("Ok, simbora\n")

r1.question("Insira a primeira nota ", (nota1) => {
     dados.nota1 = (nota1);

     r1.question("Insira a segunda nota ", (nota2) => {
          dados.nota2 = (nota2);

          r1.question("Insira a terceira nota ", (nota3) => {
               dados.nota3 = (nota3);

               let calculadora = (nota1 + nota2 + nota3) / 3

if(calculadora == media || calculadora <= media){
       console.log()
}
               r1.close();
          });
     });
});






