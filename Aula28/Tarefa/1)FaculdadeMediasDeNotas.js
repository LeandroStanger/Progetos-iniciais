const nota = [9, 7, 3];

const total = 0;
const part = nota.reduce((acumulador, valor) => acumulador + valor, total);

const part2 =  part / nota.length;

console.log(`A média final do aluno é ${part2.toFixed(2)}`);
