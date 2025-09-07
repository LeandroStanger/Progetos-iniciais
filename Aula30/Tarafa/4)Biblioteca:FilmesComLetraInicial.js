let filmes = [ 
  "Hacker (Hackers, 1995)", 
  "Matrix (The Matrix, 1999)", 
  "Eu, Robô (I, Robot, 2004)", 
  "A.I. - Inteligência Artificial (2001)" 
]; 

const busca = filmes.filter(i => i.charAt(0).toUpperCase() === "M");
const minuscula = filmes.map(i => i.toLowerCase());
const string = filmes.map(i => i.toString());


console.log(busca, "\n");
console.log(`Foi encontrado ${busca.length} filme que começa com a letra M! \n`);
console.log(`Filmes em minúsculas: ${minuscula} \n`);
console.log(`Filmes em string: ${string}`);