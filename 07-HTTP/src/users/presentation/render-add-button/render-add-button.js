import { showModal } from '../render-modal/render-modal';
import './render-add-button.css'

/**
 * 
 * @param {HTMLDivElement} element
 * @param {()=>void} callback
 */
export const RenderAddButton = (element, callback) => {

  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button')

  element.append(fabButton);

  fabButton.addEventListener('click', () => {

    // if (!callback) return;

    if (!callback) {

      showModal();

    } else {

      callback();

    }



  })

}