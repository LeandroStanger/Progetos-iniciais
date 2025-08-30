function listarPlanetas(planetas) {
    let lista = planetas.map(planetas => planetas.toUpperCase()).join(" - ");

    if (planetas.some(p => p.toLowerCase() === "terra")) {
        return `${lista}\n(Planeta azul detectado)`;
    } else {
        return lista;
    }
}

console.log(listarPlanetas(["marte", "júpiter"]));

console.log(listarPlanetas(["terra", "marte", "júpiter"]));