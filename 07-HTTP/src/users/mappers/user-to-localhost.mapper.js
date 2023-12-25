import { User } from "../models/users";

/**
 * 
 * @param {User} user 
 */
export const userModelToLocalHost = (user) => {

  const {
    avatar,
    balance,
    firstName,
    gender,
    lastName,
    isActive,
    id
  } = user;

  return {
    avatar,
    balance,
    first_name: firstName,
    gender,
    last_name: lastName,
    isActive,
    id
  }

}