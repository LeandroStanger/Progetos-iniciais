let palavra = "JavaScript";
let valor = [];
let vogal = ["a", "e", "i", "o", "u"];

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase();
    if (!vogal.includes(letra) && !valor.includes(valor)) {
        valor.push(letra)
    };
};
let quantidade = valor.length;
console.log(`A palavra ${palavra} tem ${quantidade} consoantes diferentes: ${valor.join(", ")}`);