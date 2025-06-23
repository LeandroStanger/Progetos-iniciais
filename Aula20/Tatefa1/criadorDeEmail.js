const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function criadorDeEmail() {
    rl.question(`Nome de usuário: `, (resposta) => {
        const usuario = resposta.trim().toUpperCase();

        rl.question(`Domínio: `, (resposta2) => {
            const dominio = resposta2.trim().toUpperCase();

            console.log(`Usuário: ${usuario} \nDomínio: ${dominio} \nO E-Mail é: ${usuario + "@" + dominio}`);
            rl.close();
        });
    });
}
criadorDeEmail();