import { v4 as uuid } from 'uuid'

export class Todo {

  /**
   * 
   * @param {string} description Todo's description
   * @returns an instance of Todo
   */
  constructor (description) {
    this.id = uuid();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}