let racas = "Labrador Siames Persa Pastor Angora Poodle"
racas = racas.toLowerCase().split(" ");

let racasDeCaes = "labrador, pastor, poodle";
let racasDeGatos = "siames, persa, angora";
racasDeCaes = racasDeCaes.split(", ");
racasDeGatos = racasDeGatos.split(", ");

let caes = [];
let gatos = [];

for(let i of racas){
    if(racasDeCaes.includes(i)){
        caes.push(i);
    } else if (racasDeGatos.includes(i)){
        gatos.push(i);
    }
}

console.log(`Raças de cães (${caes.length} encontradas): \n${caes.join(", ")}`);
console.log(`\n`);
console.log(`Raças de gatos (${gatos.length} encontradas): \n${gatos.join(", ")}`);