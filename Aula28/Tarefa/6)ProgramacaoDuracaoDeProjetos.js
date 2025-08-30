const duracaoDeProjetos = [10, 15, 30, 16];

const part = duracaoDeProjetos.map(i => i / 7);

const part2 = part.map(num => num.toFixed(2));

console.log(`${part2.join(", ")} (em semanas)`);