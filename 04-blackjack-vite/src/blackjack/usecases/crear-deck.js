import _ from 'underscore'
/**
 * Esta función crea un nuevo deck
 * @param {string[]} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {string[]} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {string[]} Retorna el deck nuevo y mezclado.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if (!tiposDeCarta || tiposDeCarta.length == 0) throw new Error('tiposDeCarta es obligatorio cómo un arreglo de String')
  if (!tiposEspeciales || tiposEspeciales.length == 0) throw new Error('tiposEspeciales es obligatorio cómo un arreglo de String')

  let deck = [];

  // Recorre los numeros del 2 al 10
  for (let index = 2; index <= 10; index++) {
    // Por cada número agrega la carta correspodiente a la baraja
    for (let tipo of tiposDeCarta) {
      deck.push(`${index}${tipo}`);
    }
  }

  // Agrega las cartas con valores de A, J, Q y K
  for (let tipo of tiposDeCarta) {
    // C, S, H, D
    // Por cada tipo de carta, agrega sus valores de A, J Q y K
    for (let otraCarta of tiposEspeciales) {
      deck.push(`${otraCarta}${tipo}`);
    }
  }

  return _.shuffle(deck);
};

export default crearDeck;