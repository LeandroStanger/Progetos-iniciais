const frutas = "LARANJA , UVA , MANGA";

const limpeza = frutas.trim().toLowerCase();
const frutas2 = limpeza.split(" , ");

console.log(frutas2);