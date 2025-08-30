function verificarPresenca(lista, nome) {
    const listaMinuscula = lista.map(intem => intem.toLowerCase())
    if (listaMinuscula.includes(nome.toLowerCase())) {
        return ("Nome encontrado")
    } else {
        return ("Nome não encontrado")
    }
}

console.log(verificarPresenca(["Maria", "João", "Pedro"], "joão"));