const notas = [7, 4, 8, 6, 5];

const notasFinais = notas.map(nota => nota >= 6 ? "Aprovado" : "Reprovado");

console.log(notasFinais);

const linguagens = ["Python", "Java", "PHP", "C#", "Pascal"];

const linguagensComP = linguagens.map(linguagen => linguagen.includes("P") ? linguagen : null);

console.log(linguagensComP);

