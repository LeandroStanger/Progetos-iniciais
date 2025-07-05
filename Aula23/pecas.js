let pecas = "Teclado Meéemória Placa-Mãe Cooler Leitor Impressora Gabinete ProcEêessador";

let palavrasCom3E = [];

let partes = pecas.split(" ").reduce((contador, palavras) => {
    let TodosOsE = palavras.replace(/é/gi, "e").replace(/ê/gi, "e");

    let letras = TodosOsE.split("");

    let parte2 = letras.filter(Letra => Letra.toLowerCase() === "e").length;

    if (parte2 >= 3){
        palavrasCom3E.push(palavras);
        return contador + 1;
    }
    return contador;
}, 0);

console.log(partes, palavrasCom3E.join(", "));