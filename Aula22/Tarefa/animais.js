let animais = "Cachorro Arara Jacaré Papagaio Tartaruga Girafa";

let palavrasCom3As = [];

let partes = animais.split(" ").reduce((contador, palavras) => {
    let letras = palavras.split("");

    let todosOsA = letras.filter(Letras => Letras.match(/a/gi)).length;

    if (todosOsA >= 3) {
        palavrasCom3As.push(palavras);
        return contador + 1;
    }
    return contador;
}, 0);

console.log(partes, palavrasCom3As.join(", "))
