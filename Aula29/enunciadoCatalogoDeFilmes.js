const filmes = ["Star Wars", "Matrix", "Avatar", "Star Trek", "Titanic", "Interestelar"];

const filmesComStar = filmes.map(filme => filme.includes("Star") ? filme : null);

const part = filmesComStar.toString();

console.log(part);