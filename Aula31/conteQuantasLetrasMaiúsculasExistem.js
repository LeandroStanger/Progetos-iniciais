let palavra = "JavaScript";
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];
    if (letra >= "A" && letra <= "Z") {
        if (letra === letra.toUpperCase()) {
            contador++;
        }
    }
}

console.log(`A palavra "${palavra}" tem ${contador} consoantes.`);