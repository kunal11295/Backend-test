import mongoose from "mongoose";
import { Schema } from "mongoose";

const Awdiztoken = new Schema
({
    accesstoken :String
})

export default mongoose.model("Awdiztokens",Awdiztoken)