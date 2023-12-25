import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalHost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/users";

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {

  const user = new User(userLike);
  let userUpdated;

  if (!user.firstName || !user.lastName){
    throw Error("First Name and Last Name are required");
  }

  const userToSave = userModelToLocalHost(user);

  if (user.id) {
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }

  return localhostUserToModel(userUpdated);
}


/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async(user) => {

  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const newUser = await res.json();
  return newUser;
}


/**
 * 
 * @param {User} user 
 */
const updateUser = async(user) => {

  console.log(user);

  const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const updatedUser = await res.json();
  return updatedUser;
}