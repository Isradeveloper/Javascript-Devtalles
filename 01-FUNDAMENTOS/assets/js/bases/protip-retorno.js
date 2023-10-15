// function crearPersona( nombre, apellido ) {
//   return {
//     nombre,
//     apellido
//   }
// }

const crearPersona = ( nombre, apellido ) => ({nombre, apellido})



const persona = crearPersona('Isra', 'Trujillo')
console.log(persona);


function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2  = (st, ...args) => {
  return args
}

imprimeArgumentos('hola', 213, 3, true)
const [ numero, indice, vivo ] = imprimeArgumentos2('hola', 213, 3, true)
console.log({ numero, indice, vivo});

const {apellido: nuevoApellido} = crearPersona('Fernando', 'Herrera')
console.log(nuevoApellido);


let tony = {
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

// DESESTRUCTURAR OBJETOS 
const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {
  console.log({nombre})
  console.log({codeName})
  console.log({vivo})
  console.log({edad})
  console.log({trajes})
}

imprimePropiedades(tony)