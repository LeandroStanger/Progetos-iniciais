let produtos = ["camiseta", "calça", "sapato", "boné"]; 

const buscando = ["calça", "jaqueta"];

const resultado = buscando.map(i => produtos.includes(i) ? `Produto ${i} está disponível!` : `Produto ${i} não foi encontrado.`);

const part = produtos.map(i => i.toUpperCase() );

console.log(resultado);
console.log(`Produtos em maiúsculas: ${part}`);
console.log(`Total de produtos: ${produtos.length}`);