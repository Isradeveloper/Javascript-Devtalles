/**
 * 2C = Two of clubs (Tréboles)
 * 2D = Two of diamonds (Diamantes)
 * 2S = Two of spades (Picas )
 * 2H = Two of hearts (Corazones)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const otrasCartas = ['A', 'J', 'Q', 'K']

const crearDeck = () => {

  // Recorre los numeros del 2 al 10
  for (let index = 2; index <= 10; index++) {
    // Por cada número agrega la carta correspodiente a la baraja
    for ( let tipo of tipos ) {
      deck.push(`${index}${tipo}`)
    }
  }

  // Agrega las cartas con valores de A, J, Q y K
  for ( let tipo of tipos ) {
    // Por cada tipo de carta, agrega sus valores de A, J Q y K
    for (const otraCarta of otrasCartas) {
      deck.push(`${tipo}${otraCarta}`)
    }
  }
  
  deck = _.shuffle(deck)
}

const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck'
  }
  const carta = deck.pop()
  console.log(carta);
  return carta
  
}

const valorCarta = (carta) => {
    // 2, 10, J
    const valor = carta.substring(0, carta.length - 1)
    
    // if ( isNaN(valor) ) {
    //   console.log('No es un número');
    //   puntos = ( valor === 'A' ) ? 11 : 10 
    // } else {
    //   console.log('Es un número')
    //   puntos = Number(valor)
    //   console.log(puntos);
    // }

    return ( isNaN(valor) ) ? ( valor === 'A' ) ? 11 : 10
            : Number(valor)
}

crearDeck();
// pedirCarta()
console.log(deck);
console.log(valorCarta(pedirCarta()));