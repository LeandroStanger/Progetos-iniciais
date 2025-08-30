const desenvolvedores =[
    {nome:  "Ana Silva", idade: 28},
    {nome:  "Carlos Oliveira", idade: 32},
    {nome:  "Mariana Costa ", idade: 24},
    {nome:  "João Santos", idade: 35}     
];

const part = desenvolvedores.filter((i)=> i.idade > 30);

console.log(part);