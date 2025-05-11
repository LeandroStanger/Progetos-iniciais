function clima(tempo){
    if (tempo >=25 && tempo <=35){
        return `O clima está Ensolarado!`;
    } else if (chuvoso >=10 && tempo <= 20){
        return `O clima está Chuvoso!`;
    } else if (nublado >=15 && tempo <= 25){
        return `O clima está Nublado!`;
    } else if (tempo <= 0) {
        return `O clima está Nevoso!`;
    }
}

let tempo = 35;

console.log(clima(tempo));