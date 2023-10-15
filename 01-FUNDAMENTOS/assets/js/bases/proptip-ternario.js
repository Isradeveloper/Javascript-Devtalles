const elMayor = (a, b) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log(elMayor(10, 10));
console.log(tieneMembresia(true));


const amigo = true;

const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  (() => 'Nick Fury')()
]

console.log(amigosArr);


const nota = 84.3;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'D'  :
              nota >= 0 && nota <= 69 ? 'F' : 'Nota inválida'
console.log({nota, grado});
