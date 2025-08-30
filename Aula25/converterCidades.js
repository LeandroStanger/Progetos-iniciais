function converterCidades(cidade){
    return cidade.map(cidade => cidade.toUpperCase());
}

console.log(converterCidades(["rio", "salvador", "manaus"]));