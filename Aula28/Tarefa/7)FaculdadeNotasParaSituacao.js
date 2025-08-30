const notas = [8.5, 6.0, 9.2, 4.5, 7.8];

const part = notas.map(i => i >= 6 ? "Aprovado" : "Reprovado");

console.log(part);