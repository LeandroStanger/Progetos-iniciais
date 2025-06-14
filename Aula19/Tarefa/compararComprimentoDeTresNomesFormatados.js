const nomes = ['  João  ', '    Maria   ', '   Carlos     ', '     Ana    ', '   Lucas  '];

if (nomes.length >= 1) {
    nomes[0] = nomes[0].trim().toUpperCase()
}

if (nomes.length >= 2) {
    nomes[1] = nomes[1].trim().toUpperCase()
}

if (nomes.length >= 3) {
    nomes[2] = nomes[2].trim().toUpperCase()
}

if (nomes.length >= 4) {
    nomes[3] = nomes[3].trim().toUpperCase()
}

if (nomes.length >= 5) {
    nomes[4] = nomes[4].trim().toUpperCase()
}

console.log(nomes)
