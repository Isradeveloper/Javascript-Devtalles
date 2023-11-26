/**
 * 
 * @param {string} carta Carta de la baraja
 * @param {number} turno turno del jugador
 * @param {NodeList} cartasJugadores Divs de los jugadores
 */
export const crearCarta = (carta, turno, cartasJugadores) => {
  const imgCarta = document.createElement("img");
  imgCarta.className = "carta";
  imgCarta.src = `assets/cartas/${carta}.png`;
  cartasJugadores[turno].append(imgCarta);
};