function destacarGeneros(musica){
if (musica.includes("funk")){
    console.log("ATENÇÃO: Funk adicionado!");
}
    return musica.map(som =>som.toUpperCase())
}

console.log(destacarGeneros(["rock", "samba", "jazz"]));
console.log(destacarGeneros(["rock", "samba", "jazz", "funk"]));