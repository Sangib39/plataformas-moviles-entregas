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
    // Usamos el método .sort() que ya viene en JavaScript para ordenar elementos.
    // Comparamos el apellido de la persona A con el de la persona B.
    return listaDePersonas.sort(function(a, b) {
        if (a.apellido < b.apellido) return -1;
        if (a.apellido > b.apellido) return 1;
        return 0;
    });
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 */
function soloNombres(listaDePersonas) {
    let nombres = []; // Creamos una lista vacía para guardar los nombres
    
    // Recorremos la lista de personas una por una
    for (let i = 0; i < listaDePersonas.length; i++) {
        nombres.push(listaDePersonas[i].nombre); // Guardamos solo el nombre en nuestra nueva lista
    }
    
    return nombres; // Devolvemos la lista llena de nombres
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 */
function promedioEdades(listaDePersonas) {
    let sumaTotal = 0;
    
    // Sumamos la edad de cada una de las personas
    for (let i = 0; i < listaDePersonas.length; i++) {
        sumaTotal = sumaTotal + listaDePersonas[i].edad;
    }
    
    // Dividimos la suma total por la cantidad de personas
    let promedio = sumaTotal / listaDePersonas.length;
    return promedio;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - cumplirAños
 */
function cumplirAños(listaDePersonas) {
    let nuevaLista = [];
    
    for (let i = 0; i < listaDePersonas.length; i++) {
        let personaActual = listaDePersonas[i];
        
        // Creamos una copia de la persona pero sumándole 1 a su edad
        let personaConMasAños = {
            apellido: personaActual.apellido,
            nombre: personaActual.nombre,
            edad: personaActual.edad + 1,
            documento: personaActual.documento
        };
        
        nuevaLista.push(personaConMasAños);
    }
    
    return nuevaLista;
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

/**
 * 05 - soloMayoresDeEdad
 */
function soloMayoresDeEdad(listaDePersonas) {
    let mayores = [];
    
    for (let i = 0; i < listaDePersonas.length; i++) {
        // Si la edad de la persona es mayor o igual a 18...
        if (listaDePersonas[i].edad >= 18) {
            mayores.push(listaDePersonas[i]); // La agregamos a la lista de mayores
        }
    }
    
    return mayores;
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 06 - laPersonaMayor
 */
function laPersonaMayor(listaDePersonas) {
    // Decimos que, de momento, la primera persona es la mayor de todas
    let masGrande = listaDePersonas[0];
    
    // Revisamos a los demás para ver si hay alguien que le gane en edad
    for (let i = 1; i < listaDePersonas.length; i++) {
        if (listaDePersonas[i].edad > masGrande.edad) {
            masGrande = listaDePersonas[i]; // Si encontramos a alguien mayor, ahora él es el más grande
        }
    }
    
    return masGrande;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

/**
 * 07 - agregarHeladoFavorito
 */
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    let listaConHelados = [];
    
    for (let i = 0; i < listaDePersonas.length; i++) {
        let personaActual = listaDePersonas[i];
        let gusto;
        
        // Si todavía quedan helados en la lista usamos uno, si no, le ponemos "vainilla"
        if (listaDeHelados[i] !== undefined) {
            gusto = listaDeHelados[i];
        } else {
            gusto = "vainilla";
        }
        
        // Creamos el nuevo objeto combinando los datos viejos con el helado
        let personaModificada = {
            apellido: personaActual.apellido,
            nombre: personaActual.nombre,
            edad: personaActual.edad,
            documento: personaActual.documento,
            heladoFavorito: gusto
        };
        
        listaConHelados.push(personaModificada);
    }
    
    return listaConHelados;
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
