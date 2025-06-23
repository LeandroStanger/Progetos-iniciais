const rua =  "Rua A, Número 123, Bairro Azul";

const textoLimpo = rua.replace(/[\s,]/g, "");

console.log(`Quantidade de caracteres: ${textoLimpo.length}`);