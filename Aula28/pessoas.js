const pessoas = [
  { nome: "Ana", altura: 1.65 },
  { nome: "Carlos", altura: 1.80 },
  { nome: "Beatriz", altura: 1.72 },
  { nome: "João", altura: 1.68 }
];

const part = pessoas.filter((i) => i.altura > 1.70);

console.log(part);