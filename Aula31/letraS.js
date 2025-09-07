let palavra = "javascript";
let contador = 0;

for (let i = 0; i < palavra.length; i++){
    let letra = palavra[i].toLowerCase();
    if (letra === "s"){
        contador++;
    }
}

console.log(`A letra "s" aparece ${contador} vez na palavra "javascript".`);