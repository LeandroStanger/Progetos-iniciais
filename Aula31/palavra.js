let palavra = "javascript";
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contador++;
    }
}

console.log(`A palavra "${palavra}" tem ${contador} vogais.`);