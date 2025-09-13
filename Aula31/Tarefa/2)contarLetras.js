let palavra ="OpenAI";
let contador = 0;
let contador2 = 0;

for(let i = 0; i < palavra.length; i++){
    let letra = palavra[i];
    if(letra >= "a" && letra <= "z"){
        if(letra === letra.toLowerCase()){
            contador++
        }
    }
    if(letra >= "A" && letra <= "Z"){
        if(letra === letra.toUpperCase()){
            contador2++
        }
    }
}

console.log(`A palavra ${palavra} tem ${contador2} letras maiúsculas e ${contador} letras minúsculas.`)