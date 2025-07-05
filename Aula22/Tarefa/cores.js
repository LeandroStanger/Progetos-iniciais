let cores = "Vermelho Azul Amarelo Branco Preto Roxo";

let palavrasComO =[];

let partes = cores.split(" ").reduce((contador, palavras) => {
    let letras = palavras.split("");

    let todosOsO = letras.filter(Letras => Letras.match(/o/gi)).length;

    if (todosOsO >= 1){
        palavrasComO.push(palavras);
        return contador + 1;
    }
    return contador;
}, 0);

console.log(partes, palavrasComO.join(", "));

