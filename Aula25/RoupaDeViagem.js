function RoupaDeViagem(lista, intem){
    return lista.includes(intem);
}

console.log(RoupaDeViagem(["Camisa", "Short", "Calça"], "Meia"));

console.log(RoupaDeViagem(["Camisa", "Short", "Calça"], "Calça"));