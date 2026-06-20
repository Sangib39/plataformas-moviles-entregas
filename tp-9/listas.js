var listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];

/**
 * 01 - invertirLista
 */
function invertirLista(listaDeNumeros) {
    // .slice() hace una copia para no modificar la lista original, y .reverse() la da vuelta
    return listaDeNumeros.slice().reverse();
}
console.log("invertirLista([2,3,4]): ", invertirLista([2,3,4]));

/**
 * 02 - sumarLista
 */
function sumarLista(listaDeNumeros) {
    let suma = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        suma += listaDeNumeros[i];
    }
    return suma;
}
console.log("sumarLista([2,3,4]): ", sumarLista([2,3,4]));

/**
 * 03 - contarElementosLista
 */
function contarElementosLista(listaDeNumeros) {
    // .length nos dice exactamente cuántos elementos tiene la lista
    return listaDeNumeros.length;
}
console.log("contarElementosLista([2,3,4]): ", contarElementosLista([2,3,4]));
console.log("contarElementosLista([2,3]): ", contarElementosLista([2,3]));
console.log("contarElementosLista([]): ", contarElementosLista([]));

/**
 * 04 - calcularPromedio
 */
function calcularPromedio(listaDeNumeros) {
    if (listaDeNumeros.length === 0) return 0; // Evita dividir por cero si la lista está vacía
    let suma = sumarLista(listaDeNumeros); // Reutilizamos la función de arriba
    return suma / listaDeNumeros.length;
}
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2,3,4]));
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo));

/**
 * 05 - triplicarLista
 */
function triplicarLista(listaDeNumeros) {
    // .map() recorre la lista y transforma cada elemento multiplicándolo por 3
    return listaDeNumeros.map(num => num * 3);
}
console.log("triplicarLista([1, 2, 3]): ", triplicarLista([1, 2, 3]));

/**
 * 06 - crearListaDeNumeros
 */
function crearListaDeNumeros(inicio, fin) {
    let resultado = [];
    for (let i = inicio; i <= fin; i++) {
        resultado.push(i);
    }
    return resultado;
}
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2,5));

/**
 * 07 - ordenarDeMayorAMenor
 */
function ordenarDeMayorAMenor(listaDeNumeros) {
    // Usamos .sort() con una función comparativa (b - a) para ordenar de forma decreciente
    return listaDeNumeros.slice().sort((a, b) => b - a);
}
console.log("ordenarDeMayorAMenor([2,-1,4]): ", ordenarDeMayorAMenor([2,-1,4]));
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo));

/**
 * 08 - encontrarNumeroMayor
 */
function encontrarNumeroMayor(listaDeNumeros) {
    // Math.max encuentra el mayor, el operador '...' esparce los elementos del array
    return Math.max(...listaDeNumeros);
}
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2,3,4]));
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo));

/**
 * 09 - ordenarPalabrasPorLongitud
 */
function ordenarPalabrasPorLongitud(listaDePalabras) {
    // Compara la longitud (.length) de las cadenas de texto
    return listaDePalabras.slice().sort((a, b) => a.length - b.length);
}
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']));

/**
 * 10 - encontrarPalabraMasCorta
 */
function encontrarPalabraMasCorta(listaDePalabras) {
    if (listaDePalabras.length === 0) return "";
    let masCorta = listaDePalabras[0];
    for (let i = 1; i < listaDePalabras.length; i++) {
        if (listaDePalabras[i].length < masCorta.length) {
            masCorta = listaDePalabras[i];
        }
    }
    return masCorta;
}
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']));

/**
 * 11 - filtrarSoloPositivos
 */
function filtrarSoloPositivos(listaDeNumeros) {
    // .filter() se queda solo con los elementos que cumplan la condición (mayores o iguales a 0)
    return listaDeNumeros.filter(num => num >= 0);
}
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1,-1,0]));
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo));

/**
 * 12 - contarAprobados
 */
function contarAprobados(listaDeNotas) {
    // En la mayoría de los sistemas educativos se aprueba con 4 o más (puedes cambiarlo a 6 o 7 si lo requiere tu escuela)
    let aprobados = listaDeNotas.filter(nota => nota >= 4);
    return aprobados.length;
}
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]));

/**
 * 13 - filtrarSoloTruthy
 */
function filtrarSoloTruthy(listaDeValores) {
    // Al pasar 'Boolean' dentro de .filter(), automáticamente descarta los falsy (0, null, "", undefined, etc)
    return listaDeValores.filter(Boolean);
}
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]));

/**
 * 14 - enumerarLista (Con Bonus incluido)
 */
function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) return "";
    if (listaDePalabras.length === 1) return listaDePalabras[0] + ".";
    
    // Separamos el último elemento de los demás
    let ultimo = listaDePalabras[listaDePalabras.length - 1];
    let resto = listaDePalabras.slice(0, -1);
    
    // Unimos los primeros con coma, sumamos el último con la "y", y agregamos el punto final
    let resultado = resto.join(", ") + " y " + ultimo + ".";
    
    // Bonus: Asegurar que empiece con mayúscula
    return resultado.charAt(0).toUpperCase() + resultado.slice(1);
}
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]));
