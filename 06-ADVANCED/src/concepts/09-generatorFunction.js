/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {
  console.log('generatorFunctionComponent');

  // const myGenerator = myFirstGeneratorFunction();

  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());

  const boton = document.createElement('button');
  boton.innerText = 'Click Me';
  element.append(boton)

  const renderButton = () => {
    const { value } = genId.next();
    boton.innerText = `Click ${value}`
  }

  boton.addEventListener('click', renderButton);

  const genId = idGenerator();
  console.log(genId.next());
  console.log(genId.next());
  console.log(genId.next());
  console.log(genId.next());
  console.log(genId.next());
  console.log(genId.next());

}


function* idGenerator() {
  let currenId = 0;
  while (true) {
    yield ++currenId
  }
}

function* myFirstGeneratorFunction () {

  yield 'Primer valor';
  yield 'Segundo valor';
  yield 'Tercer valor';
  yield 'Cuarto valor';


  return 'Ya no hay valores';
}