let animais = "cachorro arara jacaré papagaio tartaruga girafa";

let partes = animais.split(" ").reduce((contador, palavras) => {
    let letras = palavras.split("");

    let todosOsA = letras.filter(Letras => Letras === "a").length;

    return todosOsA >= 3 ? contador + 1 : contador;
}, 0);

console.log(`Possuem pelo menos 3 letras "a": ${partes}`)

let partes2 = animais.split(" ").filter((animais) => animais.length > 5);

console.log(`Têm comprimento maior que 5 letra: ${partes2}`);