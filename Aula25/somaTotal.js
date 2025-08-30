function somaTotal(valor){
    return valor.reduce((total, valor) => total + valor, 0)
}

console.log(somaTotal([10, 25.5, 8.99]))