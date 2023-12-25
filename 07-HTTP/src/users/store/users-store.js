import { User } from "../models/users";
import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
}

const loadNextPage = async() => {
  const users = await loadUsersByPage(state.currentPage + 1);

  if ( users.length === 0 ) return;

  state.currentPage += 1;
  state.users = users;

}


const loadPreviousPage = async() => {

  if ( state.currentPage <= 1 ) return;

  const users = await loadUsersByPage(state.currentPage - 1);

  state.currentPage -= 1;
  state.users = users;
}

/**
 * 
 * @param {User} user 
 */
const onUserChanged = (user) => {

  let wasFound = false;

  state.users = state.users.map((userState, index) => {
    if ( user.id === userState.id ) {
      wasFound = true;
      return user
    } else {
      return userState
    }
  });

  if ( state.users.length < 10 && !wasFound ) {
    state.users.push(user);
  }

}


const reloadPage = async() => {
  const users = await loadUsersByPage(state.currentPage);

  if ( users.length === 0 ) {
    await loadPreviousPage();
    return;
  };

  state.users = users;
}


export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /**
   * 
   * @returns {User[]}
   */
  getUsers: () => structuredClone(state.users),

  /**
   * 
   * @returns {number}
   */
  getCurrentPage: () => state.currentPage
}