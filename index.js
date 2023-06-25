import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

import router from "./Routes/userroutes.js";


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);


mongoose.connect('mongodb+srv://kunal11295:kunal11295@cluster0.tnxk0aj.mongodb.net/awdizdb?retryWrites=true&w=majority')
.then(() => console.log("Db connected"))
.catch((err) => console.log(err));



app.listen(5001);