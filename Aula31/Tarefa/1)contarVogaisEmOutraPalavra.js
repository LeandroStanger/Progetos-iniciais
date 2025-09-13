let palavra = "programacao";
let contador = [];
let vogais = ["a", "e", "i", "o", "u"];

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase();
    if (vogais.includes(letra) && !contador.includes(letra)) {
        contador.push(letra);
    }
}

let quantidade = contador.length;
console.log(`A palavra ${palavra} tem ${quantidade} vogais diferentes: ${contador.join(", ")}`);