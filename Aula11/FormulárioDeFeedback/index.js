document.getElementById('feedback').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const nota = document.getElementById('nota').value;
    const texto = document.getElementById('texto').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('nota', nota);
    localStorage.setItem('texto', texto);

    document.getElementById('mensagem').textContent = `Obrigado, ${nome}! Seu feedback foi enviado com sucesso!`;
    this.reset();

    alert(`Obrigado, ${nome}! Seu feedback foi enviado com sucesso!`)
    this.reset();
});