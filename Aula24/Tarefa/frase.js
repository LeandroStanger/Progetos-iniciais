let frase = "  Eu estudo JS e gosto de JS  "; 

let parte = frase.trim().replace(/JS/g, "JavaScript").split(" ").join("-");

console.log(parte);