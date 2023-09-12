let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1]

console.log({primero, ultimo});

// RECORRER ARRAY
juegos.forEach( (elemento, index, arr) => {
  console.log({elemento, index, arr});
});


// AGREGAR ELEMENTO AL FINAL - REGRESA NUEVO LENGTH
let nuevaLongitud = juegos.push('F-Zero')
console.log({nuevaLongitud, juegos});


// AGREGAR ELEMENTO AL INICIO - REGRESA NUEVO LENGTH
nuevaLongitud = juegos.unshift('Fire Emblem')
console.log({nuevaLongitud, juegos});


// ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO Y LO RETORNA
let juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos});


let posicion = 1;

// ELIMINA UN ELEMENTO DESDE LA POSICION INDICADA (Y CUANTOS DESDE ESA POSICION)
// RETORNA LOS ELEMENTOS BORRADOS
let juegosBorrados = juegos.splice(posicion, 2)
console.log({juegosBorrados, juegos});


let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});