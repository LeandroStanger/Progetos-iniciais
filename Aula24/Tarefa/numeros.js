let numeros = [4, 7, 10, 13, 22, 1];

let soma = numeros.reduce((comtador, numero) => {
    if (numero % 2 === 0){
        return comtador + numero;
    }
    return comtador;
}, 0);

console.log(soma);