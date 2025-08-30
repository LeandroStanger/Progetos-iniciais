function normalizarCursos(cursos) {
    let tinhaNormalizado = cursos.some(curso => curso === curso.toLowerCase());
    let cursosNormalizados = cursos.map(curso => curso.toLowerCase());

    return tinhaNormalizado
        ? `[${cursosNormalizados.map(c => `"${c}"`).join(', ')}]\n"Entrada já estava normalizada."`
        : `[${cursosNormalizados.map(c => `"${c}"`).join(', ')}]`;
}

console.log(normalizarCursos(["JavaScript", "PYTHON"]))

console.log(normalizarCursos(["JavaScript", "python", "react"]));