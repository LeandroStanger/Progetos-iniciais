function verificarValor(valor) {
    const tipo = typeof valor;
    let rusultado = "";

    if (tipo === "number") {
        const tipoNumero = Number.isInteger(valor) ? "inteiro" : "decimal";

        let sinal = "";
        if (valor > 0) sinal = "positivo";
        else if (valor < 0) sinal = "negativo";
        else sinal = "zero";

        let paridade = "";
        if (Number.isInteger(valor)) {
            paridade = (valor % 2 === 0) ? "par" : "ìmpar";
            rusultado = `número ${valor} é ${tipoNumero}, ${sinal} e ${paridade}`;
        } else {
            rusultado = `número ${valor} é ${valor} é ${tipoNumero}, ${sinal}`;
        }

        if (valor > 1000) rusultado += " | Esse é um número grande!";
    } else if (tipo === "bigint") {
        const sinal = (valor > 0n) ? "positivo" : "negativo";
        rusultado = `valor ${valor} é um BigInt ${sinal}`;
    } else if (tipo === "string") {
        const conteudo = valor.length > 0 ? "contém conteúdo" : " está vazia";
        const statusVazia = valor.length === 0;

        rusultado = `A string "${valor}" ${conteudo}`;

        if (valor.length > 10 && !statusVazia) {
            rusultado += " | Essa sting é longa!";
        }
    } else {
        rusultado = `valor ${valor} é do tipo ${tipo}`;
    }
    console.log(rusultado);
}

verificarValor(10)
verificarValor(-3.5)
verificarValor(123456789012345678901234n)
verificarValor("")
verificarValor(true)
verificarValor(10000)
verificarValor("Leandro Stanger")