import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent2 = async( element ) => {

  try {
    
    // console.time('Start')

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    // console.timeEnd('Start')


    console.time('Start')

    const [value1, value2, value3] = await Promise.all([slowPromise(), mediumPromise(), fastPromise()])

    console.timeEnd('Start')


    element.innerHTML = `${value1} - ${value2} - ${value3}`

  
  }catch(error){
    element.innerHTML = error
  }
}

const slowPromise = () =>
new Promise((resolve) => {
  setTimeout(() => {
    resolve('Slow Promise');
  }, 2000);
});

const mediumPromise = () =>
new Promise((resolve) => {
  setTimeout(() => {
    resolve('Medium Promise');
  }, 1500);
});

const fastPromise = () =>
new Promise((resolve) => {
  setTimeout(() => {
    resolve('Fast Promise');
  }, 1000);
});

