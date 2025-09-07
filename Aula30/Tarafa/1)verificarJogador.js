let jogadores = [ 
    { nome: "Lucas", email: "lucas@email.com", idade: 28, time: 
"Cruzeiro" }, 
    { nome: "Sofia", email: "sofia@email.com", idade: 24, time: 
"Flamengo" }, 
    { nome: "Miguel", email: "miguel@email.com", idade: 30, time: 
"Palmeiras" }, 
    { nome: "Isabela", email: "isabela@email.com", idade: 26, time: 
"Vasco" }, 
    { nome: "Gabriel", email: "gabriel@email.com", idade: 22, time: 
"Atlético-MG" }, 
    { nome: "Larissa", email: "larissa@email.com", idade: 27, time: 
"Grêmio" }, 
    { nome: "Rafael", email: "rafael@email.com", idade: 31, time: 
"São Paulo" }, 
    { nome: "Camila", email: "camila@email.com", idade: 23, time: 
"Fluminense" }, 
    { nome: "Thiago", email: "thiago@email.com", idade: 29, time: 
"Botafogo" }, 
    { nome: "Marina", email: "marina@email.com", idade: 25, time: 
"Corinthians" } 
]; 

let artilheiros = ["Lucas", "Gabriel", "Camila"];

function verificarJogador(nome, email, idade, time){

const jogadoresNomes = jogadores.map(i => i.nome.toLowerCase());
const estaNaLista = jogadoresNomes.includes(nome.toLowerCase());

const nomeDeAtilheiro = artilheiros.map(i => i.toLowerCase().includes(nome.toLowerCase()));
const nomesDeJogadores = jogadores.map(i => "\n----------------------------------------------------\n" + i.nome + " - " + i.email + " - " + i.idade + " - " + i.time + "\n");


if(!nome || !email || !idade || !time){
    return "Por favor, preencha todos os campos corretamente."
} else if(estaNaLista){
    return `Você está na lista! Atualmente temos ${jogadores.length} jogadores cadastrados.`
}else if(nomeDeAtilheiro){
    return `Seu nome não está na lista. Jogadores cadastrados: ${nomesDeJogadores}`
}else if(nomeDeAtilheiro.includes(nome.toLowerCase()) == true){
    return "Parabéns, estes são artilheiros."
}
};

console.log(verificarJogador("Lucas", "lucas@email.com", 28, 
"Cruzeiro")); 
console.log(verificarJogador("Gabriel", "gabriel@email.com", 22, 
"Atlético-MG"));
console.log(verificarJogador("Camila", "camila@email.com", 23, 
"Fluminense"));
console.log(verificarJogador("Sofia", "sofia@email.com", 24, 
"Flamengo"));
console.log(verificarJogador("Pedro", "pedro@email.com", 20, 
"Bahia"));
console.log(verificarJogador("", "teste@email.com", 22, 
"Fortaleza"));
