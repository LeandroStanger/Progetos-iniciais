let futebol = [2, 1, 3, 0, 2];

let gol = futebol.reduce((acumulador, valor) => acumulador + valor,
0,
);

console.log(gol);

let futebol1 = [2, 1, 3, 0, 2];

let gol1 = futebol.reduce((acumulador, valor) => {
   return acumulador + valor
}, 0);

console.log(gol1);