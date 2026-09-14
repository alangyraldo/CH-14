let producto = {
nombre: "Smartphone Galaxy",
precio: 1800000,
disponible: true,
colores: ["negro", "blanco", "azul"],
especificaciones: {
marca: "Samsung",
ram: "8GB",
almacenamiento: "256GB",
camara: "108MP"
},
vendedor: {
nombre: "TechStore",
ciudad: "Bogotá",
calificacion: 4.8
}
};

console.log("nombre:" , producto.nombre);
console.log("precio: $"  + producto.precio);
console.log("primer color:  " , producto.colores[0]);
console.log("marca: "  , producto.especificaciones.marca);
console.log("ram: " , producto.especificaciones.ram);
console.log("ciudad del vendedor: "  , producto.vendedor.ciudad);
console.log("calificacion:"  , producto.vendedor.calificacion);
producto.disponible = false;
console.log("disponible actualizado:  ", producto.disponible);
producto.colores.push("rojo");
console.log("colores actualizados:  ", producto.colores);
console.log("producto completo: ", producto);