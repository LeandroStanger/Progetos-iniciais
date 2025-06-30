let times = "Botafogo Coritiba Goiás Corinthians Flamengo";

let partes = times.split(" ").reduce((contador, palavras) => {
    let letras = palavras.split("");

    let todosOsO = letras.filter(Letras => Letras === "o").length;

    return todosOsO >= 2 ? contador + 1 : contador;
}, 0);

console.log(partes);