let produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Calça", preco: 120 },
    { nome: "Boné", preco: 30 },
    { nome: "Jaqueta", preco: 200 },
    { nome: "Meia", preco: 10 }
];

let maisDe50 = produtos.filter((x) => x.preco > 50);
let maisDe50Nome = maisDe50.map(x => x.nome);
console.log(`Produtos com preço > 50: ${maisDe50Nome}`);

let array = maisDe50.map(i => i.preco);
console.log(`Preços desses produtos: ${array}`);

let valor = 0;
let soma = array.reduce((acumulador, valor2) => acumulador + valor2, valor);

console.log(`Soma dos preços: 120 + 200 = ${soma}`);

