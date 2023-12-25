import { RenderAddButton } from "./presentation/render-add-button/render-add-button";
import { RenderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderModal } from "./presentation/render-modal/render-modal";
import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

/**
 *    
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async (element) => {

  element.innerHTML = 'Loading...';

  await usersStore.loadNextPage();

  element.innerHTML = '';

  RenderTable(element);
  RenderButtons(element);
  RenderAddButton(element);
  RenderModal(element, async(userLike)=> {
    const user = await saveUser(userLike);
    usersStore.onUserChanged(user);
    RenderTable();
  });

  // console.log(usersStore.getUsers());

}