import mongoose from "mongoose";
import { Schema } from "mongoose";

const user = new Schema
({
    name:String,
    email:String,
    password:String,
    role:String,
    pin:String,
    Number:Number
})


export default mongoose.model("Users",user)