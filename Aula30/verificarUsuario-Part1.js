function verificarUsuario(nome) {
  let cadastros = [
    { nome: "Elias", email: "elias@email.com", idade: 38 },
    { nome: "Maria", email: "maria@email.com", idade: 30 },
    { nome: "João", email: "joao@email.com", idade: 25 },
    { nome: "Ana", email: "ana@email.com", idade: 22 }
  ];
  const part = cadastros.map(lista => lista.nome.toUpperCase());
  const part2 = part.includes(nome.toUpperCase())

  if (part2) {
    return(`Você está na lista! Temos atualmente ${cadastros.length} cadastros: \n${part}`);
  } else if (!part2 && nome) {
    return(`Seu nome não está na lista. \nNomes cadastrados: ${part}`);
  } else {
    return(`Por favor, preencha todos os campos corretamente.`);
  }

}
console.log(verificarUsuario("Elias", "elias@email.com", 38));
console.log(verificarUsuario("Carlos", "carlos@email.com", 25));
console.log(verificarUsuario("", "teste@email.com", 20));
