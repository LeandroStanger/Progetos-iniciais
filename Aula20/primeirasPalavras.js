const frases = [
    "JavaScript é uma linguagem poderosa",
    "Aprender programação é divertido",
    "Banco de dados é essencial"
];

const primeirasPalavras = frases.map(frases => frases.split(" ")[0]);

console.log(primeirasPalavras);