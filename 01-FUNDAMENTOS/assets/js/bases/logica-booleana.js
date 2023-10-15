const regresaTrue = () => {
  console.log('Regresa true');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
}

console.warn('Not o negación')
console.log(!true);
console.log(!false);

console.log('*********************');

console.warn('AND')
console.log(true && true);
console.log(true && false);
// ------------------------------
console.log(regresaFalse() && regresaTrue);
console.log(regresaTrue() && regresaFalse( ));
//* ----------------------------------
//* SOLO EJECUTA LA PRIMERA PORQUE SI ES FALSO, YA NO SIGUE CON LO DEMÁS 
regresaFalse() && regresaTrue();



console.warn('OR')
console.log(true || false)
console.log(false || false)
//* ----------------------------------
//* SOLO EJECUTA LA PRIMERA PORQUE SI ES TRUE, YA NO SIGUE CON LO DEMÁS 
console.log(regresaTrue() || regresaFalse());


console.warn('ASIGNACIONES')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 150; // Asigna el ultimo valor, falso asigna solo asigna el primer
const a2 = 'A' && 'B' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso de nuevo'
const a5 = soyFalso || soyNull || regresaTrue() || 'Ya no soy falso de nuevo' || true;


console.log({a1, a2, a3, a4, a5  });

if ( regresaFalse() && regresaTrue() && (true || false || true) ) {
  console.log("Esto si se ejecuta");
} else {
  console.log("No se ejecutó")
}