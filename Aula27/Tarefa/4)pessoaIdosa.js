const idade = 30
const resultado = [idade].filter(i => i >= 60)

if (resultado.length > 0) {
    console.log(`É uma pessoa Idosa!`)
} else {
    console.log(`Não é uma pessoa Idosa!`)
}
