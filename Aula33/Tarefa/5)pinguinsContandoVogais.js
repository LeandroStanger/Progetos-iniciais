let pinguins = "adelie gentoo macaroni";
pinguins = pinguins.toUpperCase().split(" ");

let valorTotal = 0;
let vogal = ["A", "E", "I", "O", "U"];

for (let nome of pinguins) {
    let valor = 0;

    for (let letra of nome) {
        if (vogal.includes(letra)) {
            valor++;
            valorTotal++;
        }
    }
    console.log(`${nome} → ${valor} ${valor === 1 ? 'vogal' : 'vogais'}`);
}

console.log(`Total de vogais em todos os nomes: ${valorTotal}`);

