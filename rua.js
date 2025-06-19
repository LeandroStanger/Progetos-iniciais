const rua = "Estrada Velha, KM 102";

const partes = rua.split(/[\s, ]+/).filter(parte => parte !== " ");

const resultado = partes.map(parte => {
    return `${parte}: ${parte.length}`;
});

console.log(resultado);
