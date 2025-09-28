let vendas = "FIFA-5, Minecraft-3, Need for Speed-7, Far Cry-2, The Sims-4";

let lista = vendas.split(", ");

let listaS = lista.map(i => {
    let[jogo, vendas] = i.split("-");
    return {
        jogo: jogo.toUpperCase().trim(),
        vendas: parseFloat(vendas.trim())  
    };
});

let maisVendida = listaS.filter(x => x.vendas > 3);

console.log(`Jogos mais vendidos da semana!\n`);

maisVendida.forEach(i => {
    console.log(`${i.jogo} - ${i.vendas.toFixed(1)} ${i.jogo === 1 ? 'unidade' : 'unidades'}`);
});

let valor = 0;
let soma = listaS.reduce((acumulado, valor2) => acumulado + valor2.vendas, valor);

console.log(`\nTotal de unidades vendidas: ${soma.toFixed(1)}`);