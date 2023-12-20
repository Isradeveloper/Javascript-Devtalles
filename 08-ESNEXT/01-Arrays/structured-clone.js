/**
 * 
 * @param {HTMLDivElement} element 
 */
export const StructuredClone = (element) => {

  element.innerHTML = 'Structured clone'

  const superHeroes = [
    {
      id: 1,
      name: "Batman",
    },
    {
      id: 2,
      name: "Superman"
    },
    {
      id: 3,
      name: "Aquaman"
    }
  ]

  // const superHeroesCopy = [...superHeroes]
  const superHeroesCopy = structuredClone(superHeroes)

  superHeroesCopy[0].name = 'Isra'

  console.table(superHeroes)
  console.table(superHeroesCopy)


}