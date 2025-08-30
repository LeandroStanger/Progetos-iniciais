function mostrarEscalacao(jogadores) {
    if (jogadores.includes(10)) {
        return `O camisa 10 está inspirado hoje!`;
    }else{
      return `Jogadores em campo: ${jogadores.toString() }.`;
    }
}

console.log(mostrarEscalacao([7, 11, 5, 3]));

console.log(mostrarEscalacao([7, 10, 11, 5, 3]));

