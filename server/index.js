import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = process.env.PORT || 5000;

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
  connect();
  console.log(`Server started on ${port}`);
});
