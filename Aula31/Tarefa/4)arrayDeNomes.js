let nomes = ["Ana", "Pedro", "Lucas", "Maria", "Joao"]; 
let contador = 0;

for(let i = 0; i < nomes.length; i++){
    let letra = nomes[i];
    if (letra[0] === "A"){
        contador++;
    }
}

console.log(`No array de nomes, ${contador} nome(s) começam com a letra "A".`)