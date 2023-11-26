import { valorCarta } from './valor-carta'

/**
 * @param {string} carta
 * @param {number} turno turno: 0 = primer jugador y el último será la CPU
 * @param {NodeList} smalls Arreglo de tags smalls del html
 * @param {number[]} puntosJugadores Arreglo con los puntos de los jugadores
 * @returns {number} Puntaje del jugador
 */
export const acumularPuntos = (carta, turno, smalls, puntosJugadores) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);

  smalls[turno].innerText = puntosJugadores[turno];

  return puntosJugadores[turno];
};
