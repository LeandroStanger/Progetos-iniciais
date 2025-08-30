let times = [
  "Flamengo", "Palmeiras", "Corinthians", "São Paulo", "Grêmio",
  "Internacional", "Atlético Mineiro", "Cruzeiro", "Vasco", "Botafogo",
  "Fluminense", "Santos", "Fortaleza", "Ceará", "Athletico Paranaense",
  "Goiás", "Bahia", "Sport", "Chapecoense", "América Mineiro"
];

let procurado = "vasco"
let timesMaiuculos = times.map(time => time.toUpperCase())

let estaNaLista = timesMaiuculos.includes(procurado.toUpperCase())

console.log(timesMaiuculos)
console.log(`O time ${procurado.charAt(0).toUpperCase() + procurado.slice(1)} está na lista? ${estaNaLista}`);