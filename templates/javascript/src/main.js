/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const users = require("./routes/user.routes");

/**
 * 1. create a .env
 * 2. set mogoURI to you DB URI
 */
//mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

//app config
app.use(express.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
app.listen(port, () => {
  console.log(`Applocation is listening at ${port}`);
});

//register your endpoints here
app.use("/api/v1/users", users);
