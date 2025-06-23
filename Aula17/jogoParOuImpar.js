function jogoParOuImpar(jogador1_1, jogador2_1, jogador1_2, jogador2_2, jogador1_3, jogador2_3, jogador1_4, jogador2_4, jogador1_5, jogador2_5) {
    let postos1 = 0;
    let postos2 = 0;

    const soma1 = jogador1_1 + jogador2_1;
    if (soma1 % 2 === 0) {
        postos1 = postos1 + 1;
    } else {
        postos2 = postos2 + 1;
    }

    const soma2 = jogador1_2 + jogador2_2;
    if (soma2 % 2 === 0) {
        postos1 = postos1 + 1;
    } else {
        postos2 = postos2 + 1;
    }


    const soma3 = jogador1_3 + jogador2_3;
    if (soma3 % 2 === 0) {
        postos1 = postos1 + 1;
    } else {
        postos2 = postos2 + 1;
    }

    const soma4 = jogador1_4 + jogador2_4;
    if (soma4 % 2 === 0) {
        postos1 = postos1 + 1;
    } else {
        postos2 = postos2 + 1;
    }

    const soma5 = jogador1_5 + jogador2_5;
    if (soma5 % 2 === 0) {
        postos1 = postos1 + 1;
    } else {
        postos2 = postos2 + 1;
    }

    console.log(`Jogador 1 venceu ${postos1} rodadas.`);
    console.log(`Jogador 2 venceu ${postos2} rodadas.`);

    if (postos1 > postos2) {
        console.log(`Jogador 1 venceu o jogo!`);
    } else if (postos2 > postos2) {
        console.log(`Jogador 2 venceu o jogo!`);
    } else {
        console.log(`Empate!`);
    }
}

jogoParOuImpar(1, 2, 2, 3, 4, 5, 3, 1, 2, 4); 