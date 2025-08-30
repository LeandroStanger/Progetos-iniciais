let numeros = [5, 12, 7, 9, 18, 33];

let filtrados = numeros.filter(numeros =>{
    let bin = numeros.toString(2);
    let contagemDeUns = bin.split('').filter(bit => bit === '1').length;
    return contagemDeUns >= 2;
});

let todosImpares = filtrados.every(numeros => numeros % 2 !== 0);

console.log(`Números com mais de dois 1s em binário: ${filtrados.join(', ')}`);
console.log(`Todos os selecionados são ímpares? ${todosImpares ? 'Sim' : 'Não'}`);

