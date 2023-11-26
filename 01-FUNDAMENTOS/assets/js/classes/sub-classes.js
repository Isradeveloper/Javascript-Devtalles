class Persona {

  //* Propiedades estaticas
  static _conteo = 0;

  static get conteo () {
    return `${Persona._conteo} instancias.`;
  }

  static mensaje() {
    return `Hay ${Persona.conteo} personas.`;
  }

  nombre = "";
  codigo = "";
  frase  = "";
  _comida = "";

  constructor( nombre = "Sin nombre", codigo = "Sin codigo", frase = "Sin frase" ) {

    // if (!nombre) throw Error('Se necesita el nombre.')

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo ++;
  }

  set setComida(comida) {
    this._comida = comida.toUpperCase();
  }

  get getComida () {
    return `La comida favorita de ${this.nombre} es ${this._comida}`
  }


  quienSoy() {
    return `Hola, soy ${this.nombre} con código ${this.codigo}.`;
  }

  miFrase() {
    return `Soy ${this.codigo} y mi frase es ${this.frase}`
  }

}


class Heroe extends Persona {

  clan = 'Sin clan';

  constructor(nombre, codigo, frase){
    super(nombre, codigo, frase);

    this.clan = 'Los avengers'
  }

  quienSoy () {
    return `Soy ${this.nombre} y pertenezco a ${this.clan}`
  }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Hola!')
console.log(spiderman.quienSoy());
