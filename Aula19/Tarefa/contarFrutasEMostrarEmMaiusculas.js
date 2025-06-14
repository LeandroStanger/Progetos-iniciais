const frutas = ['  Maçã  ', '  Banana     ', '    Uva    ', '   Melancia  ', '   Pera  '];

if (frutas.length >= 1) {
    frutas[0] = frutas[0].trim().toUpperCase()
}

if (frutas.length >= 2) {
    frutas[1] = frutas[1].trim().toUpperCase()
}

if (frutas.length >= 3) {
    frutas[2] = frutas[2].trim().toUpperCase()
}

if (frutas.length >= 4) {
    frutas[3] = frutas[3].trim().toUpperCase()
}

if (frutas.length >= 5) {
    frutas[4] = frutas[4].trim().toUpperCase()
}

console.log(frutas)
