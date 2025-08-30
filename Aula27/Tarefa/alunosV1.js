const readline = require('readline');

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function alunos(){
    rl.question(`Total das Notas: `, (resposta1) => {
        const totalDasNotas = resposta1.trim().toLowerCase();

        rl.question(`Total de Materia: `, (resposta2) => {
            const totalDeMareria = resposta2.trim().toLowerCase();

            const media = totalDasNotas / totalDeMareria

            console.log(media)

            rl.close();
        });
    });
}
alunos();