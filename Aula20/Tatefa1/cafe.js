const cafe = "CAFÉ, LEITE, BOLO";

const cafe2 = cafe.split(", ");

const cafe3 = cafe2.map(cafe => cafe[0].toUpperCase() + cafe.slice(1).toLowerCase());

console.log(cafe3);