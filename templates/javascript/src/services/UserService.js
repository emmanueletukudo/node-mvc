/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */

const User = require("../models/User");

module.exports = getUsers = async () => {
  try {
    const users = await User.getUsers();
    return users;
  } catch (error) {
    console.error(error);
  }
};
