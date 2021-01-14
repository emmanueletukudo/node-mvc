/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */
 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
 
 const UserSchema = Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password:{
          type: String,
          required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
      }
 })

module.exports = User = mongoose.model("User", UserSchema);
