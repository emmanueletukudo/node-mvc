/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */

const UserService = require("../services/UserService");
module.exports = getUsers = async (req, res, next) => {
  try {
    const users = await UserService.getUsers();
  } catch (error) {
    res.json(error);
  }
};

