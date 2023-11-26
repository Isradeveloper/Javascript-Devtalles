class Singleton {

  static #instancia;

  nombre = "";

  constructor (nombre) {

    //* UNDEFINED -> TRUE -> FALSE
    //* SI YA EXISTE UNA INSTANCIA DE RETORNARLA
    if (!!Singleton.#instancia) {

      return Singleton.#instancia

    } else {
      Singleton.#instancia = this;
      this.nombre = nombre
    }


  }

}

const a = new Singleton('mondiu') 
const b = new Singleton('pipipi')
console.log(`Nombre en la instancia1: ${a.nombre}`);
console.log(`Nombre en la instancia2: ${b.nombre}`);
