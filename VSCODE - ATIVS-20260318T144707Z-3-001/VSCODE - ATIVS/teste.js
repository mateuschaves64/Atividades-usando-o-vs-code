const listaDefrutas = ["Maçã", "Banana", "Uva"];

function getRandomArrayElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const myrandomelement = getRandomArrayElement(listaDefrutas)

console.log(myrandomelement)