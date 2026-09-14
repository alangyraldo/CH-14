let edad = 20;
let tieneEntrada = true;
let esMayorDeEdad = edad >= 18;
let puedeIngresar = esMayorDeEdad && tieneEntrada;
let necesitaAcompañante = !esMayorDeEdad || !tieneEntrada;

console.log("¿es mayor de edad?", esMayorDeEdad);
console.log("¿puede ingresar?", puedeIngresar);
console.log("¿necesita acompañante?", necesitaAcompañante);