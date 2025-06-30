let tecnologias = "Python JavaScript MySQL Kubernetes Solidity IntelliJ";

let partes = tecnologias.split(" ").reduce((contador, palavras) => {
    let letras = palavras.split("").map(letras => letras.toLowerCase());

    let todosOSI = letras.filter(Letras => Letras === "i").length;

    return todosOSI >= 2 ? contador + 1 : contador;
}, 0);

console.log(partes);