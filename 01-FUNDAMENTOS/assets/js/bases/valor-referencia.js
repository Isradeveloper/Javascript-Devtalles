let a = 10;
let b = a;

a = 30;

console.log({a, b}); 


let juan = {nombre: "Juan"};
// asigna la copia del objeto
let ana   = { ...juan };
ana.nombre = 'Ana'

console.log({juan, ana});


// Asigna como parametro una copia del objeto
const cambiaNombre = ( {...persona} ) => {
  persona.nombre = 'Tony'
  return persona
}

let peter = {nombre: 'Peter'}
let tony  = cambiaNombre( peter );

console.log({peter, tony});


// ARREGLOS

const frutas = ['Manzana', 'Pera', 'Piña']
// Asigna una copia del arreglo, sin afectar el espacio en memoria
const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas})


console.time('slice')
// Asigna una copia del arreglo, sin afectar el espacio en memoria
const otrasFrutas2 = frutas.slice()
console.timeEnd('slice')

console.time('spread')
const otrasFrutas3 = [...frutas]
console.timeEnd('spread')