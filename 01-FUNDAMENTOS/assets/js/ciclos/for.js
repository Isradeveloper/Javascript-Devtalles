const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman']

//* FOR TRADICIONAL
for ( let i = 0; i < heroes.length; i++ ) {
  console.log(heroes[i])
}

//* FOR IN -- OBTIENE EL INDICE O LLAVE
for (let i in heroes) {
  console.log(`${i}: ${heroes[i]}`) //* imprime el indice y valor de cada elemento del array  
}

//* FOR OF -- OBTIENE SOLO EL VALOR
for (let heroe of heroes) {
  console.log(heroe); //* solo valores, no indices ni claves
}


const a = {
  "a": 5,
  "b": 4
}

for (let i in a) {
  console.log(i);
}