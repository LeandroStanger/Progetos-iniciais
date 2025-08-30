let senhas = ["abc123", "qwerty", "123", "senha1234"];

if (senhas.every(senhas => senhas >= 6)){
    console.log("Todas as senhas são fortes.")
} else{
    console.log("Nem todas as senhas são fortes.")
}