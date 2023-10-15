let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster',],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'
  },
  "ultima-pelicula": 'Infinity War'
};

console.log(personaje);
console.log(`Nombre: ${personaje.nombre}`);
console.log(`Nombre: ${personaje['nombre']}`);

console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log(`No. Trajes: ${personaje.trajes.length}`);
console.log(`Último traje: ${personaje.trajes[personaje.trajes.length - 1]}`);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje["ultima-pelicula"]);

// ELIMINAR PROPIEDAD
delete personaje.edad

personaje.casado = true

console.log(personaje);


// CONVIERTE EL OBJETO EN ARREGLOS
const entriesPares = Object.entries(personaje)
console.log(entriesPares);


// BLOQUEAR MODIFICACIONES DEL OBJETO
Object.freeze(personaje)
personaje.dinero = 19999999999999
personaje.casado = false
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)
console.log(propiedades);
console.log(valores);