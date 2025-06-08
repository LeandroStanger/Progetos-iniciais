function simularPartida(gols1primeiro, gols1segundo, gols3primeiro, gols2primeiro, gols2segundo, gols3segundo) {
    let vitorias1 = 0;
    let vitorias2 = 0;

    if (gols1primeiro > gols1segundo) {
        vitorias1 = vitorias1 + 1;
    } else if (gols2primeiro > gols1primeiro) {
        vitorias2 = vitorias2 + 1;
    }

    if (gols2primeiro > gols2segundo) {
        vitorias1 = vitorias1 + 1;
    } else if (gols2segundo > gols2primeiro) {
        vitorias2 = vitorias2 + 1;
    }

    if (gols3primeiro > gols3segundo) {
        vitorias1 = vitorias1 + 1;
    } else if (gols3segundo > gols3primeiro) {
        vitorias2 = vitorias2 + 1;
    }

    console.log(`Time 1 venceu ${vitorias1} Gols`);
    console.log(`Time 2 venceu ${vitorias2} Gols`);

    if (vitorias1 > vitorias2) {
        console.log(`Time 1 venceu a partida!`)
    } else if (vitorias2 > vitorias1) {
        console.log(`Time 2 venceu a partida!`)
    } else {
        console.log(`Empate na partida!`)
    }
}

    simularPartida(2, 1, 5, 3, 5, 1);
    simularPartida(2, 2, 2, 5, 5, 5);