function converterIdades(idadesString){
    let idades = idadesString.map(idade => parseInt(idade, 10));
    let temFundamental = idades.some(idade => idade < 13);

    return temFundamental
      ? `[${idades.join(",")}]\n"Aluno do ensino fundamental detectado.`
      : `[${idades.join(",")}]`; 
}

console.log(converterIdades(["13", "15", "14"]));

console.log(converterIdades(["12", "15", "14"])); 