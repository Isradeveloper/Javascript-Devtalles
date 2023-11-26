// import { shuffle } from 'underscore'

//! TODO EL PAQUETE SE PUEDE RENOMBRAR CON
import _ from 'underscore'

// import { crearDeck } from './usecases/crear-deck';
// import { pedirCarta } from './usecases/pedir-carta'
// import { valorCarta } from './usecases/valor-carta'
// import { crearDeck } from './usecases/crear-deck' // ! exportaciones individuales
// import crearDeck, {xx} from './usecases/crear-deck' // ! exportaciones por defecto;

//* Archivo de barril
import { crearDeck, pedirCarta, valorCarta, acumularPuntos, determinarGanador, turnoComputadora, crearCarta } from './usecases'

const moduloJuego = (() => {
  "use strict";

  /**
   * 2C = Two of clubs (Tréboles)
   * 2D = Two of diamonds (Diamantes)
   * 2S = Two of spades (Picas )
   * 2H = Two of hearts (Corazones)
   */
  let deck = []
  const tiposDeCarta = ["C", "D", "H", "S"],
    tiposEspeciales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  //! Referencias HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo"),
    smalls = document.querySelectorAll("small"),
    cartasJugadores = document.querySelectorAll(".div-cartas");

  const inicializarJuego = (numJugadores = 2) => {
    console.clear();
    deck = crearDeck(tiposDeCarta, tiposEspeciales);

    puntosJugadores = [];

    for (let index = 0; index < numJugadores; index++) {
      puntosJugadores.push(0);
    }

    smalls.forEach((small) => (small.innerText = 0));
    cartasJugadores.forEach((div) => (div.innerHTML = ''));

    btnPedir.disabled = false;
    btnDetener.disabled = true;

  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);

    acumularPuntos(carta, 0, smalls, puntosJugadores);

    // <img class="carta" src="assets/cartas/10C.png" alt="">

    crearCarta(carta, 0, cartasJugadores);

    if (btnDetener.disabled == true) {
      btnDetener.disabled = false;
    }

    if (puntosJugadores[0] > 21) {
      console.warn("Lo siento mucho, perdiste");

      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugadores[0], deck, puntosJugadores, smalls, cartasJugadores)

    } else if (puntosJugadores[0] === 21) {
      console.warn("21, Genial!");

      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugadores[0], deck, puntosJugadores, smalls, cartasJugadores)

    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores, smalls, cartasJugadores)

  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego
  };

})();
