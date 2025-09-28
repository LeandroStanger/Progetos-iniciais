let jogadores = [ 
  { nome: "Neymar", gols: 5 }, 
  { nome: "Messi", gols: 7 }, 
  { nome: "Ronaldo", gols: 4 }, 
  { nome: "Mbappé", gols: 6 }, 
  { nome: "Kane", gols: 3 } 
];

let jogadoresMaisDe5Gols = jogadores.filter(x => x.gols > 5);

let part =jogadoresMaisDe5Gols.map(i => i.nome.toUpperCase());

let valor = 0;
let totalDeGols = jogadoresMaisDe5Gols.reduce((acumulador, valor2) => acumulador + valor2.gols, valor);

console.log(`Artilheiros: ${part}`);
console.log(`Número de gols de cada: ${jogadoresMaisDe5Gols.map(x => x.gols)}`);
console.log(`Total de gols dos artilheiros: ${totalDeGols}`);

