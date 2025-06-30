let tecnologias = "Java JavaScript Python Assembly Pascal Typescript Cobol Fortran";

let pastes = tecnologias.split(" ").reduce((contador, palavras) => {
    let letras = palavras.split("");

    let todosOsA = letras.filter(Letras => Letras === "a").length;

    return todosOsA >= 2 ? contador +1 : contador;
}, 0);

console.log(`Possuem pelo menos 2 letras "a": ${pastes}`);

let partes2 = tecnologias.split(" ").filter((tecnologias) => tecnologias.length > 6);

console.log(`Têm comprimento maior que 6 letra: ${partes2}`)