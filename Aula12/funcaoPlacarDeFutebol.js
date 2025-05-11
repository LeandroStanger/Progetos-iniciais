function placarFutebol(golsTimeA, golsTimeB) {
    if (golsTimeA > golsTimeB) {
        return `Time A venceu por ${golsTimeA} a ${golsTimeB}!`;
    } else if (golsTimeB > golsTimeB){
        return `Time B venceu por ${golsTimeB} a ${golsTimeA}!`;
    } else {
        return `Empate em ${golsTimeA} a ${golsTimeB}!`;
    }
}

let resultado = placarFutebol(3, 2);
console.log(resultado);