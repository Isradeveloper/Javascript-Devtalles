/**
 * 
 * @param {string[]} deck 
 * @returns {string} - Retorna una carta de la baraja
 */
export const pedirCarta = (deck) => {

  if (!deck) throw new Error('No se encontró deck')

  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  return deck.pop();

};