function saludar( nombre ) {
  console.log(`Hola ${nombre}`);
  console.log(arguments);
}

const saludar2 = function() {
  console.log('Hola mundo');
  return 1
}

const saludarFlecha = () => {
  console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
  console.log(`Hola, ${nombre}`);
}

const sumar = (a, b) => {
  return a + b;
}

// SOLAMENTE CUANDO ES UN SOLO RETURN
const sumarResumido = (a, b) => a + b;

const getAleatorio = () => {
  return Math.random()
}

const getAleatorio2 = () => Math.random()

// saludar('Isra', 40, true)
// saludarFlecha()
// saludarFlecha2('Fernando GOD')
// console.log(saludar2());

console.log(getAleatorio2());