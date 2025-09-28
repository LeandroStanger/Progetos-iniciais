let carreiras = "frontend cientista suporte devops backend fullstack analista";
carreiras = carreiras.toUpperCase().split(" ");

let valor = [];

for (let i of carreiras) {
    if (valor[i]) {
        valor[i]++;
    } else {
        valor[i] = 1;
    }
}

console.log(`Lista de carreiras encontradas:`);

for (let i of carreiras) {
    let vezes = valor[i];
    console.log(`${i} (${vezes} ${vezes === 1 ? 'vez' : 'vezes'})`);
}

let carreiraParaVerificar = "backend".toUpperCase()
let part = carreiraParaVerificar;
carreiraParaVerificar = carreiras.includes(carreiraParaVerificar);
console.log(`\nVerificação:`)
console.log(`A carreira ${part} está na lista? ${carreiraParaVerificar ? 'SIM' : 'NÃO'}`)