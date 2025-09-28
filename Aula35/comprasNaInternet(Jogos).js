let compras = "Need for Speed-5, Far Cry-1, Minecraft-3, FIFA-2, The Sims-4";
//1
let lista = compras.split(", ");
//2
let part = lista.map(i => {
    let[nome, qtd] = i.split("-");
    return {
        nome: nome.trim(),
        quantidade: parseInt(qtd.trim())
    };
});
//3
let maisDe3Vitoria = part.filter(x => x.quantidade > 3);
console.log(maisDe3Vitoria)

//4
console.log(maisDe3Vitoria.map(x => x.nome));

//5
let valor = 0;
let soma = maisDe3Vitoria.reduce((acumulador, valor2) => acumulador + valor2.quantidade, valor);
console.log(`Todos os jogos comprados: ${soma}`)
