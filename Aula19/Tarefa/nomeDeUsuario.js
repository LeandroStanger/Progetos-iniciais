const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nomeDeUsuario() {
    rl.question(`Usuário: `, (resposta) => {
        const usuario = resposta.trim().toLowerCase();

        if (usuario.length > 3) {
            console.log(`Usuário: ${usuario} (Nome de usuário Valido!)`);
        } else {
            console.log(`Usuário: ${usuario} (Nome de usuário Inválido!)`);
        }
        rl.close();
    });
}

nomeDeUsuario();