let tecnologias = "Python JavaScript MySQL Kubernetes Solidity IntelliJ";

let palavrasComS = [];

let partes = tecnologias.split(" ").reduce((contador, palavras) => {
    let letras = palavras.split("");

    let todosOsS = letras.filter(Letras => Letras.match(/s/gi)).length;

    let todosOsI = palavras.replace(/i/gi, "i");

    let letras2 = todosOsI.split("");

    let parte2 = letras2.filter(Letra => Letra.toLowerCase() === "i").length;

    if (todosOsS && parte2 >= 2){
        palavrasComS.push(palavras);
        return contador +1;
    }
    return contador;
}, 0);

console.log(partes, palavrasComS.join(", "));