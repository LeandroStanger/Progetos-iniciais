const nomes = ['  José  ', ' Ana Clara ', 'Pedro ', ' Mariana ', '  Lucas  '];

if (nomes.length >= 1) {
    nomes[0] = nomes[0].trim()
}

if (nomes.length >= 2) {
    nomes[1] = nomes[1].trim()
}

if (nomes.length >= 3) {
    nomes[2] = nomes[2].trim()
}

if (nomes.length >= 4) {
    nomes[3] = nomes[3].trim()
}

if (nomes.length >= 5) {
    nomes[4] = nomes[4].trim()
}

console.log(`Nome 1: ${nomes[0]} - ${nomes[0].length} letras`)
console.log(`Nome 2: ${nomes[1]} - ${nomes[1].length} letras`)
console.log(`Nome 3: ${nomes[2]} - ${nomes[2].length} letras`)
console.log(`Nome 4: ${nomes[3]} - ${nomes[3].length} letras`)
console.log(`Nome 5: ${nomes[4]} - ${nomes[4].length} letras`)