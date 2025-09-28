let numeros = "10,20,30,40,50";
numeros = numeros.split(",")
let dobar = numeros.map((x) => x * 2);

console.log(numeros);
console.log(dobar);
dobar = dobar.toString(", ");
console.log(dobar);