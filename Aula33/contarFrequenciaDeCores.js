let cor = "Azul Vermelho Azul Verde Vermelho Amarelo";
let cores = cor.toLowerCase().split(" ");
let valor = {};

for (let part of cores) {
    if (valor[part]) {
        valor[part]++;
    } else {
        valor[part] = 1
    }
}

for (let part in valor) {
    let vezes = valor[part]
    console.log(`A cor ${part} aparece ${valor[part]} ${vezes === 1 ? 'vez' : 'vezes'}`);

}
