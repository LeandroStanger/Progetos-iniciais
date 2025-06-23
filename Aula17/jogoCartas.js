function jogoCartas(carta1_j1, carta1_j2, carta2_j1, carta2_j2, carta3_j1, carta3_j2) {
    let pontos1 = 0;
    let pontos2 = 0;

    if (carta1_j1 > carta1_j2) {
        pontos1 = pontos1 + 1;
    } else {
        pontos2 = pontos2 + 1;
    }

    if (carta2_j1 > carta2_j2) {
        pontos1 = pontos1 + 1;
    } else {
        pontos2 = pontos2 + 1;
    }

    if (carta3_j1 > carta3_j2) {
        pontos1 = pontos1 + 1;
    } else {
        pontos2 = pontos2 + 1;
    }

    console.log(`Jogador 1 venceu ${pontos1} Rodadas.`)
    console.log(`Jogador 2 venceu ${pontos2} Rodadas.`)

    if (pontos1 > pontos2) {
        console.log(`Jogador 1 venceu o jogos!`)
    } else {
        console.log(`Jogador 2 venceu o jogos!`)
    }
}

jogoCartas(10, 9, 12, 14, 7, 5); 