let resultados = "Lucas-5, Ana-3, Bruno-7, Carla-2, Pedro-4";
//1
let lista = resultados.split(",");

//2 e 4
let lista2 = lista.map(i => {
    let [nome, vitoria] = i.split("-")
    return {
        nome: nome.toUpperCase().trim(),
        vitoria: parseInt(vitoria.trim())
    };
});

//3
let maisDe3vitoriar = lista2.filter(x => x.vitoria > 3);

//5
console.log(`Jogadores que se destacaram no campeonato!`);

maisDe3vitoriar.forEach(i => {
    console.log(`${i.nome} - ${i.vitoria} ${i.vitoria === 1 ? 'vitória' : 'vitórias'}`);
});

//6
let valor = 0;
let soma = maisDe3vitoriar.reduce((acumulador, valor2) => acumulador + valor2.vitoria, valor);
console.log(`\nTotal de vitórias: ${soma}`);
