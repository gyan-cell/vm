import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";

const app = express();

dotenv.config();
connectDB();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
