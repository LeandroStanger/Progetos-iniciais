let filmes = "Titanic Interstellar Inception Se7en Armageddon GreenBook";

let palavrasCom2E = [];

let  partes = filmes.split(" ").reduce((contador, palavras) => {
    let letras = palavras.split("");

    let todosOsE = letras.filter(Letras => Letras.match(/e/gi)).length;

    if (todosOsE >= 2){
        palavrasCom2E.push(palavras);
        return contador + 1;
    }
    return contador;
}, 0);

console.log(partes, palavrasCom2E.join(", "));