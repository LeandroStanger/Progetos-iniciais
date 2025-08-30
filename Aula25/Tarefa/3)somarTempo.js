function somarTempo(valor){
    let soma = valor.reduce((total, valor) => total + valor, 0)
    console.log (`Você assistiu um total de ${soma} minutos de animes.`)

    if (soma > 120){
        return("Maratona completa!")
    }else{
        return("Maratona não completa!")
    }
}

console.log(somarTempo([30, 40, 30, 20]));

console.log(somarTempo([30, 40, 30, 40]));