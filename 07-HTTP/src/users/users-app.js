import { RenderTable } from "./presentation/render-table";
import usersStore from "./store/users-store";

/**
 *    
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async (element) => {

  element.innerHTML = 'Loading...';

  await usersStore.loadNextPage();

  element.innerHTML = '';

  RenderTable(element);

  // console.log(usersStore.getUsers());

}