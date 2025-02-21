import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();



app.use(express.json());
app.use(cookieParser());
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});