function resutadoDaPartida(tempo1Flamengo, tempo2Flamengo, tempo1Botafogo, tempo2Botafogo) {
    vitorias1 = tempo1Flamengo + tempo2Flamengo;
    vitorias2 = tempo1Botafogo + tempo2Botafogo;

    if (tempo1Flamengo > tempo1Flamengo) {
        vitorias1 = vitorias1 = +1;
    } else if (tempo2Flamengo > tempo2Flamengo) {
        vitorias2 = vitorias2 = + 1;
    }

    if (tempo1Botafogo > tempo1Botafogo) {
        vitorias1 = vitorias1 + 1;
    } else if (tempo2Botafogo > tempo2Botafogo) {
        vitorias2 = vitorias2 + 1;
    }

    if (vitorias1 > vitorias2 || vitorias2 < vitorias1) {
        console.log(`Parcar final: Flamengo X Botafogo - ${vitorias1} a ${vitorias2}`)
    } else if (vitorias1 === vitorias2) {
        console.log(`Parcar final: Flamengo X Botafogo - ${vitorias1} a ${vitorias2} é empate!`)
    }
}

resutadoDaPartida(1, 2, 0, 2)
resutadoDaPartida(1, 1, 2, 0)