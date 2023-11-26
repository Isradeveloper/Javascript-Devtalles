import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos, renderPending } from './use-cases';


const elementIDs = {
  todoList: '.todo-list',
  newTodoInput: '#new-todo-input',
  clearCompleted: '.clear-completed',
  todoFilters: '.filters li a',
  "pending-count": "#pending-count"
}

/**
 * 
 * @param {string} elementId 
 */
export const App = (elementId) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIDs.todoList, todos)
    renderPending(elementIDs['pending-count'])
  }

  //* Cuando la función App se llama
  (()=>{
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app)
    displayTodos();
    const filters = document.querySelectorAll(elementIDs.todoFilters)
    filters.forEach((filter) => {
      if (filter.id == todoStore.getCurrentFilter()) {
        filter.classList.add('selected')
      } else {
        filter.classList.remove('selected')
      }
    })
  })();


  //* Referencias HTML

  const referenciasHtml = {
    newDescriptionInput: document.querySelector(elementIDs.newTodoInput),
    todoListUL: document.querySelector(elementIDs.todoList),
    clearCompleted: document.querySelector(elementIDs.clearCompleted),
    filtersUL:document.querySelectorAll(elementIDs.todoFilters),
    "pending-count": document.querySelector(elementIDs["pending-count"])
  }

  //* Listeners
  referenciasHtml.newDescriptionInput.addEventListener('keyup', ( event )=> {
    if (event.key != 'Enter') return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value.trim());
    event.target.value = '';

    displayTodos();

  })

  referenciasHtml.todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  })

  referenciasHtml.todoListUL.addEventListener('click', (event) => {
    const isDestroyElement = event.target.className == 'destroy';
    if (isDestroyElement) {
      const element = event.target.closest('[data-id]');

      if (!element) return

      todoStore.deleteTodo(element.getAttribute('data-id'));
      displayTodos();
    } else {
      return
    }
  })

  referenciasHtml.clearCompleted.addEventListener('click', (event) => {
    todoStore.deleteCompleted();
    displayTodos();
  })

  referenciasHtml.filtersUL.forEach((filtro) => {

    filtro.addEventListener('click', (event) => {

      referenciasHtml.filtersUL.forEach((li) => {
        li.classList.remove('selected');
      });

      filtro.classList.add('selected')

      switch(event.target.text) {
        case 'Todos':
          todoStore.setSelectedFilter(Filters.All)
          break;
        case 'Pendientes':
          todoStore.setSelectedFilter(Filters.Pending)
          break;
        case 'Completados':
          todoStore.setSelectedFilter(Filters.Completed)
          break;
      }

      displayTodos();

    })
  })

}