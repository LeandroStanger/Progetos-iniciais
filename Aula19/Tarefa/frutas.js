const frutas = ['  Maçã  ', '  Banana     ', '    Uva    '];

const frutas2 = frutas.map(frutas => frutas.trim().toUpperCase());

console.log(`${frutas2} (Total de fruta é ${frutas2.length}!)`)