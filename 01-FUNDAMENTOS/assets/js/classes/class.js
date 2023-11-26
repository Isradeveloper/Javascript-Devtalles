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

const ironman = new Persona("Tony Stark", 'Iron-Man', 'Yo soy IronMan  ');

console.log(ironman.quienSoy());
console.log(ironman.miFrase());

//! USAR EL SET
ironman.setComida = 'Arroz de pollo'
console.log(ironman._comida);
console.log(ironman.getComida);
console.log(Persona._conteo);
console.log(Persona.conteo);
console.log(Persona.mensaje());