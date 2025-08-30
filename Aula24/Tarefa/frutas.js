let frutas = ["maçã", "laranja", "uva", "pera"]; 

let selecionadas = frutas.slice(0, 3);

let maiusculas = selecionadas.map(frutas => frutas.toUpperCase());
maiusculas.push("BANANA");

let tamanho = maiusculas.length;


console.log("Lista final:", maiusculas);
console.log("Tamanho:", tamanho);