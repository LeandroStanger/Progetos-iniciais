const listaDeAnimais = [
  { nome: "Cachorro", raca: "Labrador" },
  { nome: "Gato", raca: "Siames" },
  { nome: "Papagaio", raca: "Amazônico" },
  { nome: "Coelho", raca: "Anão" }
];

const nome = "gato";
const raca = "siames";

const part = listaDeAnimais.map(i => i.nome.toUpperCase());
const part2 = part.includes(nome.toUpperCase());

console.log(part2 ? "Você está na lista!" : "Você não está na lista!", "Temos atualmente animais cadastrados:", part);

const part3 = listaDeAnimais.map(i => i.raca.toUpperCase());
const part4 = part3.includes(raca.toUpperCase());

const part5 = listaDeAnimais.map(i => i.nome + " - " + i.raca);
const part6 = part5.toString(", ");

if (part2 && part4 === true) {
  console.log("Caso 1:");
  console.log(`Você está na lista! Temos atualmente ${listaDeAnimais.length} animais cadastrados.`);
  console.log(`Lista cadastrada: ${part6.toUpperCase()}`);
} else if (part2 === false && part4 == true || part2 === false && part4 === false) {
  console.log("Caso 2:");
  console.log("Nome não encontrado na lista.");
} else if (part2 == "" && part4 || part2 && part4 == "") {
  console.log("Caso 3:");
  console.log("Por favor, preencha todos os campos corretamente.");
} else {
  console.log("Caso 4:");
  console.log(`Você está na lista! Temos atualmente ${listaDeAnimais.length} animais cadastrados.`);
  console.log(`Lista cadastrada: ${part6.toUpperCase()}`);
}