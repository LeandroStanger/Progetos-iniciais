let frase = "eu gosto de programar em javascript";
let separar = frase.split(" ");
console.log(separar);

let letraM = separar.map(i => i[0].toUpperCase() + i.substring(1));
console.log(letraM);

let part = letraM.join(" ");
console.log(part);

let part2 = part.toString();
console.log(part2);