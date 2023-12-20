/**
 * 
 * @param {HTMLDivElement} element 
 */
export const ArrayTo = (element) => {

  element.innerHTML = 'ArrayTo'

  const heroes = ["Batman","Superman","Flash","Aquaman"];
  // const heroesCopy = heroes;
  
  // heroes.sort()
  //heroes.reverse()

  //! MUTA EL ARREGLO ORIGINAL Y RETORNA LOS ELEMENTOS ELIMINADOS
  const deletedHero = heroes.splice(0, 1, 'Green Lantern');

  const sortedHeroes = heroes.toSorted();
  const reversedHeroes = heroes.toReversed();

  //* NO MUTA EL ARREGLO Y RETORNA EL ARREGLO NUEVO
  const modifiedArray = heroes.toSpliced(0, 1, 'Green Lantern');

  console.table(heroes)
  console.table(sortedHeroes)
  console.table(reversedHeroes)
  console.table({ modifiedArray });

  
}