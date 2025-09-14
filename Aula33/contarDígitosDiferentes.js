let palavraComNumero = "A1B2C3D4E5";
palavraComNumero = palavraComNumero.toLowerCase();

let numero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let valor = [];

for(let numeros of palavraComNumero){
    if (numero.includes(numeros) && !valor.includes(numeros)){
        valor.push(numeros);
    }
}

console.log(`A string ${palavraComNumero} tem ${valor.length} dígitos diferentes: ${valor.join(", ")}`);