/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */
 import mongoose, {Schema, Document} from 'mongoose';
 
 export interface User extends Document{
   email: string,
   name: string,
   password: string,
   date: Date,
 }
 const UserSchema: Schema = new Schema({
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

export default mongoose.model<User>("User", UserSchema);
