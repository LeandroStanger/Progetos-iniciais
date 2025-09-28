let projetos = [ 
  { nome: "Chatbot", linhaCodigo: 1200 }, 
  { nome: "Visão Computacional", linhaCodigo: 3500 }, 
  { nome: "Reconhecimento de Voz", linhaCodigo: 2800 }, 
  { nome: "Assistente Virtual", linhaCodigo: 800 } 
];

let produtosMais1000Linhas = projetos.filter(x => x.linhaCodigo > 1000);

let nome = produtosMais1000Linhas.map(i => i.nome.toLowerCase());

valor = 0;
let soma = produtosMais1000Linhas.reduce((acomulador, valor2) => acomulador + valor2.linhaCodigo, valor);

console.log(`Projetos grandes: ${nome}`);
console.log(`Linhas de código de cada: ${produtosMais1000Linhas.map(x => x.linhaCodigo)}`);
console.log(`Total de linhas de código: ${soma}`);