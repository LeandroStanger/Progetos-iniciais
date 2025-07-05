let paises = "Canadá Brasil Índia Itália México Bolívia";

let palavrasCom2I = [];

let partes = paises.split(" ").reduce((contador, palavras) => {

    let TodosOsI = palavras.replace(/í/gi, "i");

    let letras = TodosOsI.split("");

    let parte2 = letras.filter(Letra => Letra.toLowerCase() === "i").length;

    if (parte2 >= 2) {
        palavrasCom2I.push(palavras);
        return contador + 1;
    }
    return contador;
}, 0);

console.log(partes, palavrasCom2I.join(", "));