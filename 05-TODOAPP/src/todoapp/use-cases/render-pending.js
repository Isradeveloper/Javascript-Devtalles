import todoStore, { Filters } from "../../store/todo.store";

let element;

export const renderPending = (elementID) => {
  
  if (!element) {
    element = document.querySelector(elementID);
  }

  if (!element) {
    throw new Error(`Could not find HTML element with ID "${elementID}"`);
  }

  element.innerText = todoStore.getTodos(Filters.Pending).length
  
}