function converterPrecos(valor){
    return valor.map(valor2 => parseFloat(valor2));
}

console.log(converterPrecos(["10.00", "25.50", "8.99"]));