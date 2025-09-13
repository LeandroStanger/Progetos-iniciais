let palavra = ["tecnologia123", "Brasil", "OpenAI", "banana"];
let vogal = ["a", "e", "i", "o", "u"];
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase();
    if (/[a-z]/.test(letra) && !vogal.includes(letra)) {
        contador++;
    }
  console.log(`A palavra ${palavra[i]} tem ${contador} consoantes.`);
}
