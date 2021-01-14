/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */

import  * as Users from "../services/UserService";
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.getUsers();
  } catch (error) {
    console.log(error);
  }
};

