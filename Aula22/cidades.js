let cidades = "Recife Fortaleza BeloHorizonte Manaus Teresina";

let partes = cidades.split(" ");

let filtrados = partes.filter(palavra =>{
    let letras = palavra.split("");

    let qtdE = letras.filter(letras => letras === "e").length;

    let terminaComA = palavra[palavra.length - 1] === "a";
    return qtdE === 2 && terminaComA;
});

console.log(filtrados.length, filtrados.join(", "))

