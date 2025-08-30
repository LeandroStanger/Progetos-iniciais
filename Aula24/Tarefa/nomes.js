let nomes = ["Ana", "Carlos", "João", "Lu"];

let todosMaisDe3Letras = nomes.every(nome => nome.length > 3);

let algumComecaComA = nomes.some(nomes => nomes[0] === "A");

console.log("Todos têm mais de 3 letras?", todosMaisDe3Letras);
console.log("Algum começa com 'A'?", algumComecaComA);