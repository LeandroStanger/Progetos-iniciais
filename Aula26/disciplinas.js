function disciplinas(disciplina){
if(disciplina.includes("Matemática")){
    return "Matéria encontrada: Matemática"
} else{
  return "Matéria não encontrada: Matemática"
}

}
console.log(disciplinas(["História", "Geografia", "Matemática", "Artes"]));

const disciplinas2 = ["História", "Geografia", "Matemática", "Artes"];

const busca = "Matemática";
const encontrada = disciplinas2
.map(m => m.toLowerCase())
.includes(busca.toUpperCase())
console.log(`Matéria ${encontrada ? "encontrada" : "não encontrada"}: ${busca}`);
