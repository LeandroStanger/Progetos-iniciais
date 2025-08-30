const palavras = ["sol", "montanha", "rio", "floresta", "céu"];

const part = palavras.filter(i => i.length > 4);

const part2 = part.map(i2 => i2.toUpperCase());

console.log(`Palavras originais: ${palavras} \nPalavras com mais de 4 letras em maiúsculas: ${part2}`);