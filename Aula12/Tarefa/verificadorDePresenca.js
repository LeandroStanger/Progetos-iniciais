function verificarPresenca(nome, presencaAulaMusica, presencaAulaDanca, presencaAulaTeatro, presencaAulaEsportes){
    let contador = 0
    if (presencaAulaMusica) contador++;
    if (presencaAulaDanca) contador++;
    if (presencaAulaTeatro) contador++;
    if (presencaAulaEsportes) contador++;

    if (contador >= 3){
        return `Aluno presente em várias atividades, excelente participação!`;
    } else if (contador === 2){
        return `Aluno presente em algumas atividades, boa participação!`;
    } else if (contador === 1){
        retuen `Aluno presente em apenas uma atividade, precisa se envolver mais.`;
    } else {
        return `Aluno ausente em todas as atividades.`;
    }
}

let nome = 'Leandro';
let presencaAulaMusica = true;
let presencaAulaDanca = false;
let presencaAulaTeatro = true;
let presencaAulaEsportes = true;

console.log(verificarPresenca(nome, presencaAulaMusica, presencaAulaDanca, presencaAulaTeatro, presencaAulaEsportes));