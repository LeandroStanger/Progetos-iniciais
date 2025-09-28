let filmes = [ 
  { titulo: "Matrix", duracao: 136 }, 
  { titulo: "Hackers", duracao: 107 }, 
  { titulo: "Tron", duracao: 96 }, 
  { titulo: "Ex Machina", duracao: 108 }, 
  { titulo: "O Jogo da Imitação", duracao: 114 } 
];

let duracaoMais105 = filmes.filter(x => x.duracao >105);

let tituloMais105 = duracaoMais105.map(x => `${x.titulo} (${x.titulo.length} letras)`);

let valor = 0;
let soma = duracaoMais105.reduce((acumulador, valor2) => acumulador + valor2.duracao, valor);

console.log(`Filmes longos: ${tituloMais105}`);
console.log(`Duração de cada: ${duracaoMais105.map(x => x.duracao)}`);
console.log(`Duração total dos filmes longos: ${soma}`);