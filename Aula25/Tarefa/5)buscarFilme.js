function buscarFilme(filme, busca) {
    let listaMinuscula = filme.map(intem => intem.toLowerCase());
    let buscar = listaMinuscula.includes(busca.toLowerCase);
    if (busca === "matrix") {
        return ("Bem-vindo à Matrix.")
    } else if(busca === "duna"){
        return (`O filme ${busca} está disponível para assistir.`)
    } else{
       return (`O filme ${busca} não está disponível para assistir.`)

    }
}

console.log(buscarFilme(["Interstellar", "Matrix", "Duna"], "duna")); 

console.log(buscarFilme(["Interstellar", "Matrix", "Duna"], "matrix"));

console.log(buscarFilme(["Interstellar", "Matrix", "Duna"], "Havatar"));