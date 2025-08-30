const salarios =[3200, 3500, 3200, 3800, 3600, 4000];

const total = 0;
const part = salarios.reduce((acumulador, valor) => acumulador + valor, total);

const part2 = part / salarios.length;

console.log(`Salário médio: ${part2.toFixed(2)}`);