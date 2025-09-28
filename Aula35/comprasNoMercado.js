let compras = [
  { produto: "Arroz", preco: 25, quantidade: 2 },
  { produto: "Feijão", preco: 8, quantidade: 5 },
  { produto: "Carne", preco: 45, quantidade: 1 },
  { produto: "Refrigerante", preco: 6, quantidade: 6 },
  { produto: "Chocolate", preco: 12, quantidade: 3 }
];

let acimaDe10 = compras.filter((x) => x.preco > 10);

let maiusculas = acimaDe10.map(i => i.produto.toUpperCase() 
+ ` - R$:` + i.preco * i.quantidade);

let valor = 0;
let valorTotal = acimaDe10.reduce((acumulador, valor2) => acumulador + valor2.preco * valor2.quantidade, valor);

console.log(`Produtos filtrados: ${maiusculas}`);
console.log(`Total da compra: ${valorTotal}`);

