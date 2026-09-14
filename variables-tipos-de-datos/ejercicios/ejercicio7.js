let inventario = ["laptop", "mouse", "teclado", "monitor", "cableHDMI"];

console.log("inventario completo:"  , inventario);
console.log("primer elemento:  "   , inventario[0]);
console.log("ultimo elemento:"  , inventario[inventario.length - 1]);

inventario.push("webcam");
console.log("despues de push('webcam'):"  , inventario);

let elementoEliminado = inventario.pop();
console.log("elemento eliminado:"   , elementoEliminado);
console.log("despues de pop():"  , inventario);

inventario.unshift("audifonos");
console.log("despues de unshift('audifonos'):"  , inventario);

elementoEliminado = inventario.shift();
console.log("elemento eliminado:" , elementoEliminado);
console.log("despues de shift():" , inventario);

console.log("total de elementos:" , inventario.length);