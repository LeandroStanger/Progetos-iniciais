const notas = [8, 7, 6, 9];

let media = notas.reduce((soma, nota) => soma + nota, 0)/notas.length;

let situacao = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`Média: ${media.toFixed(1)} - ${situacao}`);