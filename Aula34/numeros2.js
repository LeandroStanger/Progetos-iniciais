let numeros = "5,10,15,20,25";
let attay = numeros.split(",");
console.log(attay);

let multiplicar = attay.map((x) => x * 3);
console.log(multiplicar);

let valor = 0;
let soma = multiplicar.reduce((acumulador, valor2) => acumulador + valor2, valor);
console.log(soma);

console.log(`${multiplicar.toString()}`);