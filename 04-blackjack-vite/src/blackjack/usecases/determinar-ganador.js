/**
 * Determina quien gana
 * @param {number} ms Cantidad de ms para ejecutar
 * @param {number} puntosJugador Cantidad de puntos del jugador
 * @param {number[]} puntosJugadores Arreglo con los puntajes de los jugadores
 */

import '@sweetalert2/themes/bootstrap-4'
import Swal from 'sweetalert2'

export const determinarGanador = (ms = 200, puntosJugador, puntosJugadores) => {
  setTimeout(() => {
    if (puntosJugadores[puntosJugadores.length - 1] === puntosJugador) {
      Swal.fire({
        title: "EMPATE ➖",
        icon: "info",
        timer: 2000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        iconColor: 'yellow'
      })
    } else if (puntosJugador > 21) {
      Swal.fire({
        title: "HAS PERDIDO ❌",
        icon: "info",
        timer: 2000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        iconColor: 'red'
      })
    } else if (puntosJugadores[puntosJugadores.length - 1] > 21) {
      Swal.fire({
        title: "HAS GANADO ✔️",
        icon: "success",
        timer: 2000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
      })
    } else if (
      puntosJugadores[puntosJugadores.length - 1] <= 21 &&
      puntosJugadores[puntosJugadores.length - 1] > puntosJugador
    ) {
      Swal.fire({
        title: "HAS PERDIDO ❌",
        icon: "info",
        timer: 2000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        iconColor: 'red'
      })
    }
  }, ms) ;
};