const jogadores = [
  { nome: "Neymar", posicao: "atacante" },
  { nome: "Thiago Silva", posicao: "zagueiro" },
  { nome: "Alisson", posicao: "goleiro" },
  { nome: "Gabriel Jesus", posicao: "atacante" },
  { nome: "Casemiro", posicao: "volante" }
];

const atacantes = jogadores.filter(jogador => jogador.posicao === "atacante");

const nomesAtacantes = atacantes.map(atacante => atacante.nome);


console.log("Atacantes encontrados: ", nomesAtacantes);
console.log("Quantidade de atacantes: ", nomesAtacantes.length);