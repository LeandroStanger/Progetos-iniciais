let jogadores = "Ronaldinho Roberto Rúgero Pelé Ronaldo Ramires Rícaro Romário";

let palavrasCom2R= [];

let partes = jogadores.split(" ").reduce((contador, palavras) =>{
    let TodosOsR = palavras.replace(/ŕ/gi, "r");
    
    let letras = TodosOsR.split("");

    let parte2 = letras.filter(Letra => Letra.toLowerCase() === "r").length;

    if (parte2 >= 2){
        palavrasCom2R.push(palavras);
        return contador +1;
    }
    return contador
}, 0)

console.log(partes, palavrasCom2R.join(", "))