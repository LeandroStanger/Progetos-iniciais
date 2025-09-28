let palavras = ["JavaScript", "html", "CSS", "ReacT"];
let palavrasMaiusculas = palavras.map(i => i.toUpperCase());
console.log(palavrasMaiusculas);
let busca = palavrasMaiusculas.includes("HTML");
console.log(busca);

let ok = palavrasMaiusculas.map(i => i + " -OK");
console.log(ok);

let part = palavrasMaiusculas.toString(",");
console.log(part);