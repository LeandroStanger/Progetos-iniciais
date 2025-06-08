function verificarValor(valor) {
    if (Number.isInteger(valor)) {
        console.log(`${valor} é um Number Inteiro!`);
    }else if (typeof valor === 'number' && Number.parseFloat) {
        console.log(`${valor} é um Number Float!`);
    } else if (typeof valor === 'bigint') {
        console.log(`${valor} é um Number BigInt!`);
    } else {
        console.log(`${valor} é ${typeof valor}`);
    }
}

verificarValor(42);
verificarValor(3.14);
verificarValor(1234567890123456789012345n);
verificarValor("Olá mundo");
verificarValor(true);