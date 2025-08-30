let compras = [10, 25, 30];

let soma = compras.map(precos =>{ 
    return parseFloat((precos * 1.10).toFixed(2));
});

console.log(soma);