const jogadores = [
  { nome: "Neymar", gols: 7 },
  { nome: "Messi", gols: 3 },
  { nome: "Ronaldo", gols: 10 },
  { nome: "Pelé", gols: 4 },
  { nome: "Mbappé", gols: 6 }
];


const destaques = jogadores.filter(jogador => jogador.gols > 5);

const mensagens = destaques.map(jogador => {
    const nome = jogador.nome.toLowerCase();
    const media = (jogador.gols / 10).toFixed(2);
    return `${nome}  marcou em média ${media} gols por jogo.`
});

console.log("Jogadores originais:", jogadores);

if(mensagens.length > 0){
    console.log("Parabéns! Esses jogadores tiveram uma ótima temporada: ");
    mensagens.forEach(msg => console.log(msg));
}else{
    console.log("\nVamos continuar treinando para marcar mais gols na próxima temporada!")
}