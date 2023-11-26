class Persona {

  //! DESESTRUCTURACIÓN DE OBJETOS
  static porObjeto({nombre, apellido, pais}) {
    return new Persona(nombre, apellido, pais);
  }

  constructor (nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  } 

  getInfo () {
    console.log(`info: ${this.nombre} - ${this.apellido} - ${this.pais}`);
  }

}

const nombre1 = 'Melissa',
      apellido1 = 'Flores',
      pais = 'Honduras';

const isra = {
  nombre: 'Isra', 
  apellido: 'Trujillo',
  pais: 'Colombia'
}

const persona1 = new Persona(nombre1, apellido1, pais)
const persona2 = Persona.porObjeto(isra)
persona1.getInfo()
persona2.getInfo()
