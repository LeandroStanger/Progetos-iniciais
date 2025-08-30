function contemPalavraChave(valor, inten){
    if(valor.includes(inten.toLowerCase())){
        return("Palavra encontrada")
    }else{
        return("Palavra não encontrada")
    }
}

console.log(contemPalavraChave("O cliente pediu café", "CAFÉ"));
console.log(contemPalavraChave("Fizemos uma pausa para almoço", "jantar"))