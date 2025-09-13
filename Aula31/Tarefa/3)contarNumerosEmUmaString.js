let digitos = "abc1234def";
let contador= 0;

for(let i = 0; i < digitos.length; i++){
    let numero = digitos[i];
    if(!(numero >= "a" && numero <= "z")){
        if (numero === numero.toLowerCase()){
            contador++;
        }
    }
}

console.log(`A string ${digitos} tem ${contador} números.`)