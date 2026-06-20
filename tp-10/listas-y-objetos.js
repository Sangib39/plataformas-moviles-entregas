var listaPersonasEjemplo = [
    { "apellido": "Perez", "nombre": "Juan", "edad": 20, "documento": 12345 },
    { "apellido": "Lopez", "nombre": "Luis", "edad": 20, "documento": 23456 },
    { "apellido": "Zapata", "nombre": "Pablo", "edad": 10, "documento": 34567 },
    { "apellido": "Acuña", "nombre": "Ana", "edad": 30, "documento": 45678 },
];

/**
 * 01 - ordenarPorApellido
 */
function ordenarPorApellido(listaDePersonas) {
    // Usamos .sort() y localeCompare() para ordenar cadenas de texto alfabéticamente considerando acentos o la Ñ
    return listaDePersonas.slice().sort((a, b) => a.apellido.localeCompare(b.apellido));
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 */
function soloNombres(listaDePersonas) {
    // .map() nos permite transformar la lista de objetos en una lista que solo contenga el string del nombre
    return listaDePersonas.map(persona => persona.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 */
function promedioEdades(listaDePersonas) {
    if (listaDePersonas.length === 0) return 0;
    
    // Sumamos todas las edades usando un bucle tradicional o .reduce()
    let sumaEdades = listaDePersonas.reduce((total, persona) => total + persona.edad, 0);
    return sumaEdades / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - cumplirAños
 */
function cumplirAños(listaDePersonas) {
    // Usamos .map() creando copias de los objetos para incrementar su edad sin alterar la lista original
    return listaDePersonas.map(persona => {
        return {
            ...persona,
            edad: persona.edad + 1
        };
    });
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

/**
 * 05 - soloMayoresDeEdad
 */
function soloMayoresDeEdad(listaDePersonas) {
    // .filter() evalúa la propiedad .edad de cada objeto y se queda con los mayores a 18
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 06 - laPersonaMayor
 */
function laPersonaMayor(listaDePersonas) {
    if (listaDePersonas.length === 0) return null;
    
    let mayor = listaDePersonas[0];
    for (let i = 1; i < listaDePersonas.length; i++) {
        if (listaDePersonas[i].edad > mayor.edad) {
            mayor = listaDePersonas[i];
        }
    }
    return mayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

/**
 * 07 - agregarHeladoFavorito
 */
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    return listaDePersonas.map((persona, index) => {
        // Si el índice actual existe en la lista de helados lo usa, de lo contrario usa "vainilla"
        let gusto = listaDeHelados[index] !== undefined ? listaDeHelados[index] : "vainilla";
        return {
            ...persona,
            heladoFavorito: gusto
        };
    });
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
