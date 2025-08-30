function formatarPrecos(precos){
    return precos.map(valor => parseFloat(valor).toFixed(2));
}
const precos =["10.5", "99.99", "3"];

console.log(formatarPrecos(precos));

console.log(`Total de produtos: ${precos.length}`);