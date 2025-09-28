let pinguinsAntarticos = "Imperador Adelie Gentoo Macaroni Rockhopper";
pinguinsAntarticos = pinguinsAntarticos.toUpperCase().split(" ");
let listaDePinguins = pinguinsAntarticos.length;

console.log(`Lista de pinguins: (${listaDePinguins} espécies no total): \n`);

let valor = {};

for (let pinguins of pinguinsAntarticos) {
    if (valor[pinguins]) {
        valor[pinguins]++;
    } else {
        valor[pinguins] = 1;
    }
}

for (let pinguins of pinguinsAntarticos) {
    let vezes = pinguins.length;
    console.log(`${pinguins} → ${vezes} ${vezes === 1 ? 'letra' : 'letras'}`);
}
console.log(`\nNomes curtos (até 6 letras): `)

for (let ate6Letras of pinguinsAntarticos) {
    if (ate6Letras.length <= 6) {
        console.log(ate6Letras)
    }
}

console.log(`\nNomes longos (mais de 6 letras): `)

for (let mais6Letras of pinguinsAntarticos) {
    if (mais6Letras.length > 6) {
        console.log(mais6Letras)
    }
}