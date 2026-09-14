let carrito = [
  { producto: "Laptop", precio: 2500000, cantidad: 1 },
  { producto: "Mouse", precio: 80000, cantidad: 2 },
  { producto: "Teclado", precio: 150000, cantidad: 1 }
];


console.log("carrito completo:  " ,  carrito);
console.log("primer producto:  ", carrito[0].producto);
console.log("precio del segundo producto: "  , carrito[1].precio);
console.log("cantidad del tercer producto  :", carrito[2].cantidad);


carrito.push({
  producto: "monitor",
  precio: 800000,
  cantidad: 1
});


console.log("nuevo producto agregado:  ", carrito[3].producto);


let total = 0;

for (let producto of carrito) {
  total = total + (producto.precio * producto.cantidad);
}


console.log("total a pagar  :  $" + total);