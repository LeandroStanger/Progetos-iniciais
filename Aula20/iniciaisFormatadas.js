const nomes = ['   maria da silva', '   joão alves    ', '    ana carla    '];

const iniciaisFormatadas = nomes.map(nomes => {
    const nomesLimpo = nomes.trim().toUpperCase();
    const partes = nomesLimpo.split(" ");
    let inicias = "";

    for (let parte of partes) {
        inicias += parte.substring(0, 1) + ".";
    }

    return inicias
});

console.log(iniciaisFormatadas);
