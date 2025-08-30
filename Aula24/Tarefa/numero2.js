let numero = 3521;

let soma = numero.toString().split("").map(numero => Number(numero) * 2).join("");

console.log(soma);