const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function quantidadeDeLetras() {
    rl.question(`Usuário: `, (resposta) => {
        const usuario = resposta.trim().toUpperCase();

        if (usuario.length > 5) {
            console.log(`Usuário: ${usuario} (Tem ${usuario.length} Letras) (Nome de usuário Valido!)`);
        } else {
            console.log(`Usuário: ${usuario} (Tem ${usuario.length} Letras) (Nome de usuário Inválido!)`);
        }
        rl.close()
    })
}
quantidadeDeLetras()