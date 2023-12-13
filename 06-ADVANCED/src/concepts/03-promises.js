import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
  
  const renderHero = (hero) => {
    element.innerHTML = hero.name
  }

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `${hero1.name} /  ${hero2.name}`;
  }

  const renderError = (error) => {
    element.innerHTML = `
      <h2>Error:</h2>
      <h3>${error}</h3>
    `
  }

  const id1 = "5d86371f25a058e5b1c8a65e";
  const id2 = "5d86371f97c29d020f1e1f6d";


  //* PROMESAS SIMPLES
  // findHero(id1).then((value) => renderHero(value))

  // findHero(id1)
  //   .then(renderHero)
  //   .catch(renderError)


  //* PROMESAS SIMPLES ANIDADAS

  // findHero(id1)
  //   .then((hero1) => {
      
  //     findHero(id2)
  //       .then((hero2) => {
  //         renderTwoHeroes(hero1, hero2)
  //       })
  //       .catch(renderError)

  //   })
  //   .catch(renderError)



  //* PROMISAS QUE RETORNAN PROMESAS
  // let hero1;
  // findHero(id1)
  //   .then((hero) => {

  //     hero1 = hero;
  //     return findHero(id2);
    
  //   }).then((hero2) => {

  //     renderTwoHeroes(hero1, hero2);
    
  //   })
  //   .catch(renderError)


  //* PROMISE ALL
  Promise.all([findHero(id1), findHero(id2)])
    .then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError)
}


/**
 * 
 * @param {String} id 
 * @returns {Promise<Object | String>}
 */
const findHero = ( id ) => {

  return new Promise((resolve, reject) => {

    const hero = heroes.find( hero => hero.id == id);

    if (hero) {

      resolve(hero);
      return;

    } else {

      reject(`No Hero with the id of ${id}`);

    }
  });

}
