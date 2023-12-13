import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => {

  try {
    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371f9f80b591f499df32';

    const hero1 = await findHero(id1);
    const hero2 = await findHero(id2);

    element.innerHTML = `${hero1} / ${hero2}`
  } catch (error) {
    element.innerHTML = error
  }

}

/**
 * 
 * @param {String} id
 * @returns {Promise<String>} 
 */
const findHero = async (id) => {
  const hero = heroes.find(hero => hero.id == id); 
  
  if (!hero) throw (`Hero with id ${id} not found`);

  return hero.name
}