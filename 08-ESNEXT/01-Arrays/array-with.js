/**
 * 
 * @param {HTMLDivElement} element 
 */
export const ArrayWith = (element) => {

  element.innerHTML = 'ArrayWith'

  const state = [
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

  const index = 1;
  const newName = 'Green Lantern';

  
  
  // const newState = state.map( (hero, i) => {
    
  //   if (i === index) {
  //     hero.name = newName;
  //   }
    
  //   // return hero;
  //   // return {...hero};

    
  // })
  
  // Realiza la modificacion del objeto recibiendo el indice como parametro y retorna un arreglo
  const newState = state.with(index, {
    // ...state[index],
    ...state.at(index),
    name: newName 
  })


  state[0].name = 'Volcan Negro';

  console.table(newState)

  console.log('El ultimo heroe', newState.at(-1))

}