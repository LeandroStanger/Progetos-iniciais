let ingressos = [120, 85, 200, 150, 90];

const verificarIngressos = ingressos.map(i => i / 7);
const duasCasas = verificarIngressos.map(i => i.toFixed(2));

console.log(duasCasas);
console.log("Foram registrados ingressos vendidos em 5 dias de exibição!");
console.log(`Valores como string: ${ingressos}`);
console.log(`Valores em maiúsculas: ${ingressos}`);