const frase = "JavaScript é divertido e poderoso";

const partes = frase.split(" ");
const partes2 = partes.filter((partes) => partes.length > 4).map(partes => partes.charAt(0).toUpperCase());

console.log(partes2);
