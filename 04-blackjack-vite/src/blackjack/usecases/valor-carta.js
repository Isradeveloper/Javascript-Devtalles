/**
 * Obtiene el valor equivalente de la carta
 * @param {string} carta - Carta de la baraja
 * @returns {number}
 */
export const valorCarta = (carta) => {
  // 2, 10, J
  // obtiene el valor de la carta (Si es una letra trae el valor, si no el numero)
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
};