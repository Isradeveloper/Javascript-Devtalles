/**
 * 2C = Two of clubs (Tréboles)
 * 2D = Two of diamonds (Diamantes)
 * 2S = Two of spades (Picas )
 * 2H = Two of hearts (Corazones)
 */
let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const otrasCartas = ['A', 'J', 'Q', 'K']

let puntosJugador = 0, puntosComputadora = 0;

//! Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');


const smalls = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasCPU = document.querySelector('#cpu-cartas')


const crearDeck = () => {

  deck = []

  // Recorre los numeros del 2 al 10
  for (let index = 2; index <= 10; index++) {
    // Por cada número agrega la carta correspodiente a la baraja
    for ( let tipo of tipos ) {
      deck.push(`${index}${tipo}`)
    }
  }

  // Agrega las cartas con valores de A, J, Q y K
  for ( let tipo of tipos ) { // C, S, H, D
    // Por cada tipo de carta, agrega sus valores de A, J Q y K
    for (let otraCarta of otrasCartas) {
      deck.push(`${otraCarta}${tipo}`)
    }
  }
  
  deck = _.shuffle(deck)
}

const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck'
  }
  const carta = deck.pop()
  return carta  
}

const valorCarta = (carta) => {
    // 2, 10, J
    // obtiene el valor de la carta (Si es una letra trae el valor, si no el numero)
    const valor = carta.substring(0, carta.length - 1)
    
    // if ( isNaN(valor) ) {
    //   console.log('No es un número');
    //   puntos = ( valor === 'A' ) ? 11 : 10 
    // } else {
    //   console.log('Es un número')
    //   puntos = Number(valor)
    //   console.log(puntos);
    // }

    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : Number(valor);
}

//* Turno de la computadora 

const turnoComputadora = (puntosMinimos) => {

  do {
    
    const carta = pedirCarta();

    puntosComputadora = puntosComputadora + valorCarta( carta )

    smalls[1].innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/10C.png" alt="">

    const imgCarta = document.createElement('img');
    imgCarta.className = 'carta';
    imgCarta.src = `assets/cartas/${carta}.png`
    divCartasCPU.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }

  } while ( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos ) {
      alert('Empate :/');
    } else if ( puntosMinimos > 21 ) {
      alert('Has perdido :(');
    } else if ( puntosComputadora > 21 ) {
      alert('Has ganado :)');
    } else if ( puntosComputadora <= 21 && puntosComputadora > puntosMinimos ) {
      alert('Has perdido :(');
    }
  }, 200);

}

// Eventos
btnPedir.addEventListener('click', () => {
  
  const carta = pedirCarta();

  puntosJugador = puntosJugador + valorCarta( carta )

  smalls[0].innerText = puntosJugador;

  // <img class="carta" src="assets/cartas/10C.png" alt="">

  const imgCarta = document.createElement('img');
  imgCarta.className = 'carta';
  imgCarta.src = `assets/cartas/${carta}.png`
  divCartasJugador.append(imgCarta);

  if (btnDetener.disabled == true) {
    btnDetener.disabled = false;
  }

  if (puntosJugador > 21){

    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

  } else if (puntosJugador === 21) {

    console.warn('21, Genial!')
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

  }

})


btnDetener.addEventListener('click', () => {

  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);

});


btnNuevo.addEventListener('click', () => {

  crearDeck();
  
  puntosJugador = 0;
  puntosComputadora = 0;

  smalls[0].innerText = puntosJugador;
  smalls[1].innerText = puntosComputadora;

  btnPedir.disabled = false;
  btnDetener.disabled = true;

  divCartasJugador.innerHTML = '';
  divCartasCPU.innerHTML = '';

})
