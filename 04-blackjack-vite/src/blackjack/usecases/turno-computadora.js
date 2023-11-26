import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from './'

/**
 * Empieza el turno de la computadora
 * @param {number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {string[]} deck Baraja de cartas
 * @param {number[]} puntosJugadores Puntaje de los jugadores
 * @param {NodeList} smalls Arreglo de tags smalls del html
 * @param {NodeList} cartasJugadores Divs de los jugadores

 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, smalls, cartasJugadores) => {

  if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios')
  if (!deck || deck.length == 0) throw new Error('deck son necesarios')

  do {
    const carta = pedirCarta(deck);

    acumularPuntos(carta, puntosJugadores.length - 1, smalls, puntosJugadores);

    crearCarta(carta, puntosJugadores.length - 1, cartasJugadores);

  } while (
    puntosJugadores[puntosJugadores.length - 1] < puntosMinimos &&
    puntosMinimos <= 21
  );

  determinarGanador(250, puntosMinimos, puntosJugadores);
};