const frutas = "banana maçã abacaxi pera uva";

let lista = frutas.split(" ");

let total = lista.reduce((contador, palavras) => {
let letras = palavras.split("");

let todosOsA = letras.filter(Letras => Letras === "a").length;

return todosOsA >= 2 ? contador + 1 : contador;
}, 0);

console.log(total);