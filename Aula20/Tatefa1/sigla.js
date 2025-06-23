const nomeCompleto = 'Lucas Mendes Araujo';

const partes = nomeCompleto.split(" ").filter(parte => parte.trim() !== " ");

const iniciais = partes.map(parte => parte[0].toUpperCase());

const sigla = iniciais.join(".") + ".";

console.log(`Sigla: ${sigla}`)