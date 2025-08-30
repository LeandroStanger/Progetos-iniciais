function finalizarCompra(carrinho) {
    let total = carrinho.reduce((soma, valor) => soma + valor, 0);
    
    let totalFormatado = total.toFixed(2);

    let temFreteGratis = total >= 100;
    
    let mensagem = `Valor total da compra: R$ ${totalFormatado}`;
    
    if (temFreteGratis) {
        mensagem += '\n"Frete grátis aplicado!"';
    }
    
    return mensagem;
}

console.log(finalizarCompra([10.5, 20.5, 60]));

console.log(finalizarCompra([23.9, 15.5]));