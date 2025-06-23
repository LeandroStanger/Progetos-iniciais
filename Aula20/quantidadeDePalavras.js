const frases = [
    "Aprender JavaScript é divertido",
    "O método split separa strings",
    "Estamos estudando arrays agora"
];

const quantidadeDePalavras = frases.map(frases => frases.split(" ").length)

console.log(quantidadeDePalavras)