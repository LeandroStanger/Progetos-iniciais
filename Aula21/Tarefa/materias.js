let materias = "Matemática Geografia Ciências Filosofia Química Redação";

let partes = materias.split(" ").reduce((contador, palavras) =>{
    let letras = palavras.split("");

    let todosOsE = letras.filter(Letras => Letras === "e").length;

    return todosOsE >= 3 ? contador +1 : contador;
}, 0);

console.log(partes);
