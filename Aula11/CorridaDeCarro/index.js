document.getElementById('corridaDeCarro').addEventListener('submit', function(event){
    event.preventDefault();

    const carroA = document.getElementById('carroA').value;
    const carroB = document.getElementById('carroB').value;

    localStorage.setItem('carroA', carroA);
    localStorage.setItem('carroB', carroB);

    if (carroA < carroB){
        document.getElementById('mensagem').textContent = "Carro A venceu com tempo de " + carroA + " segundos contra " + carroB + " segundos.";
        this.reset();
    } else if (carroB < carroA) {
        document.getElementById('mensagem').textContent = "Carro B venceu com com tempo de " + carroB + " segundos contra " + carroA + " segundos.";
        this.reset();
    } else {
        document.getElementById('mensagem').textContent = "Empate! Ambos fizeram  " + carroA + " sugundos.";
        this.reset();
    }
});