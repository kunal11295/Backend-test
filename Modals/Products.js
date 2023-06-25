import mongoose from "mongoose";
import { Schema } from "mongoose";

const product = new Schema
({
    title:String,
    price:String,
    description:String,
    image:String,
    category:String
})

export default mongoose.model("Products",product)
