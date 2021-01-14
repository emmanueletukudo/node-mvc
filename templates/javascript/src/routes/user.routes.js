/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */
const { Router } = require("express");
const router = Router();
const UserCtrl = require("../controllers/user.controller");

router.get("/", UserCtrl.getUsers);

module.exports = router;
