const numeros = [1, 2, 3, 4, 5];

function multiplicaPorDois(numeros){
    return numeros * 2;
}

const dobro = numeros.map(multiplicaPorDois);

console.log(dobro);