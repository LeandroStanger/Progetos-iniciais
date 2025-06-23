function soma(a, b, c) {
return a + b - c;

}
console.log (soma (5, 8, 7));

//*Crie uma função chamada 'multiplica' que recebe dois números como parâmetros e retorna o resultado da multiplicação entre eles.
// Após criar a função, utilize o console.log() para imprimir o resultado da multiplicação de 6 e 4.*/

function multiplica (a, b) {
return a * b;

}
console.log (multiplica (6, 4));

//Crie uma função chamada dividirDoisNumeros que recebe dois números como parâmetros e retorna o resultado da divisão do primeiro número pelo segundo.

//Após criar a função, utilize o console.log() para imprimir a mensagem "A divisão destes 2 números é: " seguida do resultado da divisão de 20 e 4.

function dividirDoisNumeros (a, b){
return a / b;

}
console.log ("A divisão destes 2 números é: ", dividirDoisNumeros(20, 4));

// Função que soma as idades do pai e do filho
function somaIdades (idadePai, idadeFilho){
    return idadePai + idadeFilho;
}
// Criação das variáveis idadePai e idadeFilho
let idadePai = 65
let idadeFilho = 25
// Imprime a mensagem com a soma das idades usando a função
console.log ("A idade do pai mais a indade do filho e: ", somaIdades(idadePai, idadeFilho))

//Crie uma função chamada somaPrecos que recebe dois preços como parâmetros e retorna a soma dos preços. 
//Utilize a função para imprimir a mensagem: "O preço total dos produtos é: ", seguida do resultado da soma.

function somaPrecos(produto01, produto02){
return produto01 + produto02;
}
let produto01 = 30;
let produto02 = 15;

console.log ("O preço total dos produtos é: ", somaPrecos(produto01, produto02));