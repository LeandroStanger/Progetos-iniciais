const precos = [19.90, 35.50, 12.00, 22.60];

const total = 0;

const part = precos.reduce((acumulador, valor) => acumulador + valor, total);

console.log(`Total da compra: ${part.toFixed(2)}`);