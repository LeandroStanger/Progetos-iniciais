function verificarUsuario(nome, email, idade) {
  let cadastros = [
    { nome: "Elias", email: "elias@email.com", idade: 38 },
    { nome: "Maria", email: "maria@email.com", idade: 30 },
    { nome: "João", email: "joao@email.com", idade: 25 },
    { nome: "Ana", email: "ana@email.com", idade: 22 }
  ];
  const part = cadastros.map(lista => lista.nome.toUpperCase());
  const part2 = part.includes(nome.toUpperCase());

  const part3 = cadastros.map(lista => lista.email.toUpperCase());
  const part4 = part3.includes(email.toUpperCase());

  const part5 = cadastros.includes(idade)
  const part6 = cadastros.map(lista => lista.idade)
  //console.log(part6)

  if (part2 && part4 && part5) {
    return(`Você está na lista! Temos atualmente ${cadastros.length} cadastros: \n${part} \n${part3} \n$${part6}`);
  } else if (!part2 && nome && !part4 && email && !part5 && idade) {
    return(`Seu nome não está na lista. \nNomes cadastrados: ${part} \nEmail cadastrados: ${part3} \nIdade cadastrados: ${part6}`);
  } else {
    return(`Por favor, preencha todos os campos corretamente.`);
  }

}
console.log(verificarUsuario("Elias", "elias@email.com", 38));
console.log(verificarUsuario("Carlos", "carlos@email.com", 25));
console.log(verificarUsuario("", "teste@email.com", 20));
