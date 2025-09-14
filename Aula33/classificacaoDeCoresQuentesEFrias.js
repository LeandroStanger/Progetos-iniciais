let coresQuentes = "Vermelho, Laranja, Amarelo";
let coresFrias = "Azul, Verde, Roxo";
let coresDesconhecidas = "Cinza"
let valor = {};

coresQuentes = coresQuentes.toLowerCase().split(", ");
coresFrias = coresFrias.toLowerCase().split(", ");
coresDesconhecidas = coresDesconhecidas.toLowerCase().split(", ")

let quantasCoresQuentes = coresQuentes.length;
let quantasCoresFrias = coresFrias.length;
let quantasCoresDesconhecidas = coresDesconhecidas.length

console.log(`Cores quentes: ${quantasCoresQuentes} \nCores frias: ${quantasCoresFrias} \nCores desconhecidas: ${quantasCoresDesconhecidas}`);

for (let cor of coresQuentes) {
    if (valor[cor]) {
        valor[cor]++;
    } else {
        valor[cor] = 1;
    }
}

for (let cor of coresQuentes) {
    let vezes = valor[cor];
    console.log(`Cores quentes: \n`)
    console.log(`${cor} (${vezes} ${vezes === 1 ? 'vez' : 'vezes'}) \n`);
}

for(let cor of coresFrias){
    if(valor[cor]){
        valor[cor]++;
    }else{
        valor[cor] = 1;;
    }
}

for (let cor of coresFrias){
    let vezes = valor[cor];
    console.log(`Cores frias: \n`);
    console.log(`${cor} (${vezes} ${vezes === 1 ? 'vez' : 'vezes'}) \n`)
}

for (let cor of coresDesconhecidas){
    if(valor[cor]){
        valor[cor]++
    } else{
        valor[cor] = 1;
    }
}

for (let cor of coresDesconhecidas){
    let vezes = valor[cor];
    console.log(`Cores desconhecidas: \n`);
    console.log(`${cor} (${vezes} ${vezes === 1 ? 'vez' : 'vezes'}) \n`);
}
