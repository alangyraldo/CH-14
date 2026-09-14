let perfil = {
  nombre: "María",
  apellido: "López",
  edad: 28,
  profesion: "Diseñadora",
  ciudad: "Medellín"
};


console.log("perfil completo:", perfil);
console.log("nombre:" , perfil.nombre);
console.log("apellido:" , perfil["apellido"]);

perfil.edad = 29;
console.log("edad actualizada:" , perfil.edad);

perfil.hobby = "fotografia";
console.log("despues de agregar hobby:" , perfil);

delete perfil.ciudad;
console.log("despues de eliminar ciudad:" , perfil);

console.log("perfil final:", perfil);