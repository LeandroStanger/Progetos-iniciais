function verificarTipoNumero(valor) {
    if (typeof valor === 'number') {
        console.log(`${valor} é um Number!`);
    } else if (typeof valor === 'bigint') {
        console.log(`${valor} é um BigInt!`);
}
}

verificarTipoNumero(42);
verificarTipoNumero(123456789012345678901n);
verificarTipoNumero(Number.MAX_SAFE_INTEGER);
verificarTipoNumero(BigInt(987654321987654321n));