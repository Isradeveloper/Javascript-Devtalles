const moduloJuego = (() => {
  "use strict";

  /**
   * 2C = Two of clubs (Tréboles)
   * 2D = Two of diamonds (Diamantes)
   * 2S = Two of spades (Picas )
   * 2H = Two of hearts (Corazones)
   */
  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    otrasCartas = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  //! Referencias HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo"),
    smalls = document.querySelectorAll("small"),
    cartasJugadores = document.querySelectorAll(".div-cartas");

  const inicializarJuego = (numJugadores = 2) => {
    console.clear();
    deck = crearDeck();

    puntosJugadores = [];

    for (let index = 0; index < numJugadores; index++) {
      puntosJugadores.push(0);
    }

    smalls.forEach((small) => (small.innerText = 0));
    cartasJugadores.forEach((div) => (div.innerHTML = ''));

    btnPedir.disabled = false;
    btnDetener.disabled = true;
  };

  /**
   *
   * @param {number} turno
   * turno: 0 = primer jugador y el último será la CPU
   */
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);

    smalls[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.className = "carta";
    imgCarta.src = `assets/cartas/${carta}.png`;
    cartasJugadores[turno].append(imgCarta);
  };

  const determinarGanador = (ms = 200, puntosJugador) => {
    setTimeout(() => {
      if (puntosJugadores[puntosJugadores.length - 1] === puntosJugador) {
        alert("Empate :/");
      } else if (puntosJugador > 21) {
        alert("Has perdido :(");
      } else if (puntosJugadores[puntosJugadores.length - 1] > 21) {
        alert("Has ganado :)");
      } else if (
        puntosJugadores[puntosJugadores.length - 1] <= 21 &&
        puntosJugadores[puntosJugadores.length - 1] > puntosJugador
      ) {
        alert("Has perdido :(");
      }
    }, ms);
  };

  const crearDeck = () => {
    deck = [];

    // Recorre los numeros del 2 al 10
    for (let index = 2; index <= 10; index++) {
      // Por cada número agrega la carta correspodiente a la baraja
      for (let tipo of tipos) {
        deck.push(`${index}${tipo}`);
      }
    }

    // Agrega las cartas con valores de A, J, Q y K
    for (let tipo of tipos) {
      // C, S, H, D
      // Por cada tipo de carta, agrega sus valores de A, J Q y K
      for (let otraCarta of otrasCartas) {
        deck.push(`${otraCarta}${tipo}`);
      }
    }

    return _.shuffle(deck);
  };

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };

  const valorCarta = (carta) => {
    // 2, 10, J
    // obtiene el valor de la carta (Si es una letra trae el valor, si no el numero)
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
  };

  //* Turno de la computadora

  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();

      acumularPuntos(carta, puntosJugadores.length - 1);

      crearCarta(carta, puntosJugadores.length - 1);
    } while (
      puntosJugadores[puntosJugadores.length - 1] < puntosMinimos &&
      puntosMinimos <= 21
    );

    determinarGanador(250, puntosMinimos);
  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();

    acumularPuntos(carta, 0);

    // <img class="carta" src="assets/cartas/10C.png" alt="">

    crearCarta(carta, 0);

    if (btnDetener.disabled == true) {
      btnDetener.disabled = false;
    }

    if (puntosJugadores[0] > 21) {
      console.warn("Lo siento mucho, perdiste");

      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugadores[0]);
    } else if (puntosJugadores[0] === 21) {
      console.warn("21, Genial!");

      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugadores[0]);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego
  };

})();
