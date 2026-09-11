/*
## Objetivos de Aprendizaje

Al finalizar esta sesión, seré capaz de:

- Explicar qué son las variables en JavaScript.
- Introducir tipos de datos primitivos comunes en JavaScript.
- Introducir estructuras de datos clave en JavaScript.

-variable
-number
-string (cadena)
-concatenar
-boolean
-array
-objetc


*/

const prompt = require('prompt-sync')();// el prompt-sync es un paquete que nos permite leer datos del usuario desde la consola

/*

//const prompt = require('prompt-sync')();

let nombre = "Juan"; // let me permite declaarar la variable y poder actualizar su valor posteriormente
console.log(nombre);

nombre = "Pedro"; // actualizamos el valor de la variable nombre
console.log(nombre);

// const es una constante que nunca va a cambiar el valor de la variable

const PI = 3.1416; // const me permite declarar una constante que no puede ser reasignad
console.log(PI);

// PI =3.444; si reasignamos el valor de la constante PI nos va a dar un error porque no se puede reasignar el valor de una constante
// console.log(PI); 

//var edad =27; // con var es otra forma de declarar variables, pero no es recomendable usarla porque tiene un alcance global y puede generar problemas en el código
//console.log(edad);

//operaciones con numeros

let suma =5+7;
console.log(suma);


//concatenar cadena
let nombreUsuario = "Juan";
let apellidoUsuario = "Pérez";


let concatenacion = nombreUsuario + " " + apellidoUsuario + " y su edad es de: " + (12 + 8);
console.log(concatenacion);
console.log(typeof concatenacion);

let esMayorDeEdad = true;
console.log(esMayorDeEdad);

let esMenorDeEdad = false;
console.log(esMenorDeEdad);

let sumaBoolean = true + false;
console.log(suma);


// null y indefined 

let saldo; // => undefined delcaro una variable sin darle un valor 
console.log(saldo);

let valornulo = null; // => null es un valor que indica que la variable no tiene valor
console.log(valornulo);


// errores 

let resultado = "abc" *2;
console.log(resultado);


nombreUsuario = prompt('Cual es tu nombre?: ');

edadUsuario = prompt('Cual es tu edad: ');

console.log("El nombre que ingresaste es " + nombreUsuario + " y tu edad es de " + edadUsuario);
console.log(`Hola ${nombreUsuario} que gusto hablar contigo, veo que tu edad es de ${edadUsuario} anios`);
console.log(`El tipo de dato de la edad es ${typeof edadUsuario}`);
*/


//array y listas 

let listacompras = ["huevos", "leche", "pan","frutas"];


console.log(listacompras[0]);

listacompras.push("verduras"); // agregamos un elemento al final del array
console.log(listacompras);

listacompras.pop(); // eliminamos el ultimo elemento del array}
console.log(listacompras);


let listacompras2 = ["gaseosa", "papitas"];

let listacompras3 = listacompras.concat(listacompras2); // concatenamos dos arrays
console.log(listacompras3);

// objeto conmo array es un conjunto de datos pero con propiedades y valores
// guarda colecciones de pares en 'clave:valor'

let datospersonales = {
    nombre: "Juan",
    email: "123@example.com",
    edad: 30,
    esmayordeedad: true,
    hobbies: ["leer", "correr", "viajar"],
};

console.log(datospersonales);
console.log(datospersonales.nombre);
console.log(datospersonales.hobbies[1]);

console.log(Object.keys(datospersonales)); // nos devuelve un array con las claves del objeto