const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Que dia da semana é hoje? ', function(dia) {
  if (dia === 'segunda') {
    console.log('Hoje é dia de estudar Matemática!');
  } else if (dia === 'terça') {
    console.log('Hoje é dia de estudar Português!');
  } else if (dia === 'quarta') {
    console.log('Hoje é dia de revisar conteúdos!');
  } else if (dia === 'quinta') {
    console.log('Hoje é dia de fazer exercícios!');
  } else if (dia === 'sexta') {
    console.log('Último dia de estudo da semana! Mantenha o foco!');
  } else if (dia === 'sábado') {
    console.log('Sábado chegou! Hora de descansar um pouco.');
  } else if (dia === 'domingo') {
    console.log('Domingo é dia de descanso total!');
  } else {
    console.log('Dia inválido. Tente novamente com nomes como "segunda", "terça", etc.');
  }

  rl.close();
});