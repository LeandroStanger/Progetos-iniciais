const frutas = "banana, maçã, pera"

const frutas1 = frutas.split(" ,");
const frutas2 = frutas1.map(frutas => frutas.toUpperCase());

console.log(frutas2);