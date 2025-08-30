function estaNaLista(lista, pais){
    const listaMinuscula = lista.map(intem => intem.toLowerCase());
    if (listaMinuscula.includes(pais.toLowerCase())) {
        if(pais === "brasil"){
        return (`O país ${pais} está na lista! \nO melhor país do mundo!`)
        }else{
        return (`O país ${pais} está na lista!`);
        }
    }else{
        return (`O país ${pais} não está na lista!`);
    }

}

console.log(estaNaLista(["Brasil", "Japão", "Canadá"], "canadá"));
console.log(estaNaLista(["Brasil", "Japão", "Canadá"], "brasil"));
