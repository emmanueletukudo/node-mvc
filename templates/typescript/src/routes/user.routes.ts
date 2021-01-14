/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */
import { Router } "express";
const router = Router();
import {getUsers} from "../controllers/user.controller";

router.get("/", getUsers);

export default router;
