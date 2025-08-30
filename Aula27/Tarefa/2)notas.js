const notas = [9, 8, 9, 7, 9];

const media = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / notas.length;

console.log(media);