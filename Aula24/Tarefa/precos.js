let precos = [25, 55, 78, 32, 100];

let soma = precos.filter(precos => precos > 50).map(precos => precos * 0.9);

console.log(soma);