let semana = ["segunda", "terça", "quanta", "quinta", "sexta", "sabado", "domingo"]

let dia = "terça"

let finalDeSemana = ["sabado", "domingo"];
let resutado

if(finalDeSemana.includes(dia.toLowerCase())){
    resutado = "É final de semana";
}else{
    resutado = "É dia útil";
}

console.log(resutado)