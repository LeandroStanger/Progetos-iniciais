const nomes = ['  João  ', ' Maria', 'Carlos ', '  Ana  ', ' Lucas '];

if(nomes.length >= 1){
    nomes[0] = nomes[0].trim();
}

if (nomes.length >= 2){
    nomes[1] = nomes[1].trim();
}

if (nomes.length >= 3){
    nomes[2] = nomes[1].trim();
}

if (nomes.length >= 4){
    nomes[3] = nomes[1].trim();
}

if (nomes.length >= 5){
    nomes[4] = nomes[1].trim();
}

console.log(nomes)