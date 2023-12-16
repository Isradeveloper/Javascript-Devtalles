import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const GeneratorAsync = async ( element ) => {
  
  const heroGenerator = getHeroGenerator();

  let isFinished = false;

  do {

    const {value, done} = await heroGenerator.next();
    isFinished = done;

    if ( isFinished ) break;

    element.innerHTML = value;

  // Mientras que done sea falso
  } while( !isFinished )

}


async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep();
    yield hero.name;
  }

  return 'Hero not found';
}

const sleep = () => {
  return new Promise ((resolve) => {

    setTimeout(() => {
      resolve()
    }, 500);

  })
}