const nomes = ["  Ana  ", "JOÃO", "maria"];

const nomes2 = nomes.map(nomes => nomes.trim().toLowerCase());

console.log(`Nome formatado: ${nomes2[0]} - Total de letras: ${nomes2[0].length}!`);
console.log(`Nome formatado: ${nomes2[1]} - Total de letras: ${nomes2[1].length}!`);
console.log(`Nome formatado: ${nomes2[2]} - Total de letras: ${nomes2[2].length}!`);