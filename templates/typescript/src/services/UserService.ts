/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */

import User from "../models/User";

export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
  }
};
