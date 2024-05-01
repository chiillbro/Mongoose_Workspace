import express from "express";
import connectDB from "./db/connectDB.js";
import { updateById } from "./models/Movies.js";

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";
console.clear();

connectDB(DATABASE_URL);
// createManyDocs();
// allDocs();
// singleDocs();
updateById("6607bc85d33dc798781353c9");
app.listen(port, () => console.log(`Server listening to ${port}`));
