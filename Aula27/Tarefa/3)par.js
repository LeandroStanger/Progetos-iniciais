const numeros = "9, 8, 4, 7, 2"

const part = numeros.split(", ");

const par = part.filter(nota => nota % 2 == 0)

console.log(par)