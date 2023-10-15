let a = 5;

if ( a >= 10 ) {
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if ( dia === 0 ) {
  console.log('Domingo');
} else if ( dia === 1 ) {
  console.log('Lunes');
} else if ( dia === 2 ) {
  console.log('Martes');
} else {
  console.log(`Día ${dia}`);
}


// SIN USAR IF ELSE O SWITCH, SOLO OBJETOS

// dia = 3;

const diaLetras = {
  "0": "Domingo",
  "1": "Lunes",
  "2": "Martes",
  "3": "Miércoles",
  "4": "Jueves",
  "5": "Viernes",
  "6": "Sábado"
}

const diaLetrasFunciones = {
  "0": () => "Domingo",
  "1": () => "Lunes",
  "2": () => "Martes",
  "3": () => "Miércoles",
  "4": () => "Jueves",
  "5": () => "Viernes",
  "6": () => "Sábado"
}

const diaLetraArray = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

console.log(diaLetrasFunciones[dia]() || 'Día no  válido');
console.log(diaLetraArray[dia] || 'Día no  válido');