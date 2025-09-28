let indutriais = "Cloro Nitrogenio Oxigenio Cloro Argonio Amonia Nitrogenio";
indutriais = indutriais.toUpperCase().split(" ").sort();
let valor = {};
let valor2 = []

console.log(`Lista de gases em ordem alfabética: \n${indutriais.join(", ")}`);

for(let i of indutriais){
    let ix = i
    if(!valor2.includes(ix)){
        valor2.push(ix);
    }
}

console.log(`Foram observados ${valor2.length} gases diferentes, e um total de ${indutriais.length} gases listados.`)