let numeros = [6, 11, 13, 22, 27, 30];

let filtrados = numeros.filter(numeros => {
    let bin = numeros.toString(2).split("");
    let ultimos2 = bin.slice(-2).join("")
    return ultimos2 === "11"
});

let dividirPor3 = filtrados.filter(numeros => numeros % 3 === 0);

let todosMaiorQue10 = filtrados.every(numeros => numeros > 10);

console.log(`Números com binário terminando em '11': ${filtrados.join(", ")}`);
console.log(`Quantidade de divisíveis por 3: ${dividirPor3.length}`);
console.log(`Todos são maiores que 10? ${todosMaiorQue10 ? "Sim" : "Não"}`);