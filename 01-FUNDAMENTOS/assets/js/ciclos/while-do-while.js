
//* WHILE - SE REPITE CON EL BOOLEANO

// (() => {
//   const carros = ['Ford', 'Mazda', 'Honda', 'Toyota']
//   let i = 0

//   while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
//   }
// })()

(() => {
  const carros = ['Ford', 'Mazda', 'Honda', 'Toyota']
  let i = 0

  while (carros[i]) {

    if (i === 1) {
      // break;
      i ++;
      continue;
    }
    
    console.log(carros[i]);
    i++;
  }
})()




//* DO WHILE - EJECUTA SIEMPRE EL BODY 1 VEZ - Y SE REPITE CON EL BOOLEANO
let j = 0;
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota']

do {
  console.log(carros[j]);
  j++;
} while(carros[j]);