let treinos = "Carlos-5.5, Ana-3, Bruno-7.25, Carla-2, Pedro-4.5";

let lista = treinos.split(", ");

let part = lista.map(i => {
    let[nome, horas] = i.toUpperCase().split("-");
    return {
        nome: nome.trim(),
        horas: parseFloat(horas.trim())
    };
})

let fF = part.filter(x => x.horas > 3);

console.log(`Alunos que se destacaram nos treinos!`);

fF.forEach(i => {
    console.log(`${i.nome} - ${i.horas.toFixed(2)} ${i.horas === 1 ? 'hora' : 'horas'}`);
});

let valor = 0;
let soma = fF.reduce((acumulador, valor2) => acumulador + valor2.horas,valor);
console.log(`\nTotal de horas: ${soma.toFixed(2)}`);
