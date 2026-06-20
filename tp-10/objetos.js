var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

/**
 * 01 - crearPersona
 */
function crearPersona(nombre, apellido, edad, documento) {
    // Creamos un objeto a mano asignándole los valores que nos pasan por los parámetros
    let nuevaPersona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento
    };
    return nuevaPersona;
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));

/**
 * 02 - agregarApodo
 */
function agregarApodo(persona, apodo) {
    // Creamos un objeto nuevo copiando lo que ya tenía la persona y le sumamos el campo apodo
    let personaConApodo = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad,
        documento: persona.documento,
        apodo: apodo // Campo nuevo
    };
    return personaConApodo;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));

/**
 * 03 - sinDocumento
 */
function sinDocumento(persona) {
    // Copiamos todas las propiedades a un nuevo objeto EXCEPTO el documento
    let personaSinDni = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad
    };
    return personaSinDni;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));

/**
 * 04 - tieneDocumento
 */
function tieneDocumento(persona) {
    // Verificamos si la propiedad 'documento' es distinta de undefined (es decir, si existe)
    if (persona.documento !== undefined) {
        return true;
    } else {
        return false;
    }
}
console.log("resultado tieneDocumento: ", tieneDocumento(personaEjemplo));

/**
 * 05 - nombreCompletoDePersona
 */
function nombreCompletoDePersona(persona) {
    // Unimos los textos usando el signo + sumando la coma y el espacio intermedio
    let nombreCompleto = persona.apellido + ", " + persona.nombre;
    return nombreCompleto;
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));

/**
 * 06 - felizCumpleaños
 */
function felizCumpleaños(persona) {
    // Copiamos los datos pero a la edad le sumamos 1
    let personaMasVieja = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad + 1,
        documento: persona.documento
    };
    return personaMasVieja;
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));

/**
 * 07 - sonLaMismaPersona
 */
function sonLaMismaPersona(persona1, persona2) {
    // Comparamos el documento (DNI) de ambas personas, ya que es el dato único de cada uno
    if (persona1.documento === persona2.documento) {
        return true;
    } else {
        return false;
    }
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));

/**
 * 08 - personaMasGrande
 */
function personaMasGrande(persona1, persona2) {
    // Comparamos las edades usando un "if" tradicional
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else {
        return persona2; // Si la segunda es mayor o son iguales, devuelve la segunda
    }
}
console.log("resultado personaMasGrande: ", personaMasGrande(
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 }
));
