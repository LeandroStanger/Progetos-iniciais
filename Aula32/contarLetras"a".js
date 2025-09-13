let cor = "Amarelo";
let comtador = 0;

for(let i = 0; i < cor.length; i++){
    let letraA = cor[i].toLowerCase();
   if(letraA === "a"){
    comtador++;
   }
}

    console.log(`A letra "a" aparece ${comtador} vezes.`);
